
cmake_minimum_required(VERSION 3.20)
project(performance-monitor)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

option(BASELINE "Build baseline" OFF)

if(BASELINE)
  add_subdirectory(deps/wasm-compiler-baseline)
else()
  add_subdirectory(deps/wasm-compiler)
endif()

add_subdirectory(parser)
add_subdirectory(transpose)
