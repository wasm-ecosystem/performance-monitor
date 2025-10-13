#include "Source.hpp"
#include <cassert>
#include <cstdint>

#include "src/WasmModule/WasmModule.hpp"
#include "src/utils/StackTop.hpp"
#include <chrono>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>

class WarpRunner {
  vb::ILogger logger{};
  uint8_t const *stackTop;
  vb::WasmModule m;

public:
  explicit WarpRunner(void *const ctx);

  vb::WasmModule *operator->() { return &m; }
  uint8_t const *getStackTop() const { return stackTop; }
};

WarpRunner::WarpRunner(void *const ctx)
    : stackTop(static_cast<uint8_t const *>(vb::getStackTop())), m{logger} {
  m.setStacktraceRecordCount(32U);
  m.setContext(ctx);
}

std::string readBinaryFile(std::string const &path) {
  if (!std::filesystem::exists(path))
    throw std::runtime_error{"cannot open file: " + path};
  std::ifstream ifs{path, std::ios::in | std::ios::binary};
  if (!ifs.is_open())
    throw std::runtime_error{"cannot open file: " + path};
  std::stringstream buffer;
  buffer << ifs.rdbuf();
  return std::move(buffer).str();
}

int main(int argc, char **argv) {
  if (argc != 2) {
    std::cerr << "require compiler.*.wasm\n";
    return 1;
  }
  vb::WasmModule::initEnvironment(&malloc, &realloc, &free);
  WarpRunner r{nullptr};

  std::string const wasmBytes = readBinaryFile(argv[1]);
  r->setStacktraceRecordCount(32U);
  r->initFromBytecode(vb::Span<const uint8_t>{reinterpret_cast<uint8_t const *>(
                                                  wasmBytes.data()),
                                              wasmBytes.size()},
                      vb::Span<vb::NativeSymbol const>{}, true);

  uint8_t const *const stackTop = r.getStackTop();
  auto const allocString = [&](std::u16string utf16Str) -> int32_t {
    int32_t const ptr = r->callExportedFunctionWithName<1>(
                             r.getStackTop(), "__new",
                             static_cast<int32_t>(utf16Str.size() * 2U),
                             static_cast<int32_t>(2))[0]
                            .i32;
    r->callExportedFunctionWithName<1>(r.getStackTop(), "__pin", ptr);
    uint8_t *const stringBegin = r->getLinearMemoryRegion(
        static_cast<uint32_t>(ptr), static_cast<uint32_t>(utf16Str.size()));
    std::memcpy(stringBegin, utf16Str.data(),
                utf16Str.size() * sizeof(char16_t));
    return ptr;
  };

  r->start(stackTop);
  int32_t const option =
      r->callExportedFunctionWithName<1>(stackTop, "newOptions")[0].i32;
  r->callExportedFunctionWithName<1>(stackTop, "__pin", option);
  int32_t const program =
      r->callExportedFunctionWithName<1>(stackTop, "newProgram", option)[0].i32;
  r->callExportedFunctionWithName<1>(stackTop, "__pin", program);

  r->callExportedFunctionWithName<0>(r.getStackTop(), "__setArgumentsLength",
                                     4U);

  int32_t const path = allocString(std::u16string{u"index.ts"});
  int32_t const text = allocString(bench::source);

  std::chrono::high_resolution_clock::time_point const start =
      std::chrono::high_resolution_clock::now();
  r->callExportedFunctionWithName<0>(r.getStackTop(), "parse", program, text,
                                     path, 1);
  std::chrono::high_resolution_clock::time_point const end =
      std::chrono::high_resolution_clock::now();

  std::ofstream ofs{"bench/parser/out/result.txt"};
  ofs << "{ \"time(microseconds)\": "
      << std::chrono::duration_cast<std::chrono::microseconds>(end - start)
             .count()
      << ", \"jit_code_size(bytes)\": " << r->getCompiledBinary().size()
      << " }\n";
  vb::WasmModule::destroyEnvironment();
}
