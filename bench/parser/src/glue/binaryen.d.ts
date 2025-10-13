/**
 * @fileoverview Portable definitions for Binaryen's C-API.
 *
 * tsc uses the .js file next to it, while asc makes it a Wasm import.
 *
 * See: https://github.com/WebAssembly/binaryen/blob/main/src/binaryen-c.h
 *
 * @license Apache-2.0
 */
module "binaryen";

type Ref = usize;

export type Index = u32;
export type ExpressionId = i32;
export type FeatureFlags = u32;
export type Op = i32;
export type ExternalKind = u32;
export type SideEffects = u32;
export type ExpressionRunnerFlags = u32;

export type StringRef = Ref;
export type Pointer<T> = Ref;
export type ArrayRef<T> = Ref;
export type TypeRef = Ref;
export type HeapTypeRef = Ref;
export type PackedType = u32;
export type ModuleRef = Ref;
export type LiteralRef = Ref;
export type ExpressionRef = Ref;
export type FunctionRef = Ref;
export type ImportRef = Ref;
export type ExportRef = Ref;
export type GlobalRef = Ref;
export type TagRef = Ref;
export type TableRef = Ref;
export type ElementSegmentRef = Ref;
export type RelooperRef = Ref;
export type RelooperBlockRef = Ref;
export type ExpressionRunnerRef = Ref;
export type BinaryenModuleAllocateAndWriteResultRef = Ref;
export type TypeBuilderRef = Ref;
export type TypeBuilderErrorReason = u32;

export function _BinaryenTypeCreate(types: ArrayRef<TypeRef>, numTypes: u32): TypeRef {
  return 0;
}
export function _BinaryenTypeArity(type: TypeRef): u32 {
  return 0;
}
export function _BinaryenTypeExpand(type: TypeRef, typesOut: ArrayRef<TypeRef>): void {
  return;
}
export function _BinaryenTypeGetHeapType(type: TypeRef): HeapTypeRef {
  return 0;
}
export function _BinaryenTypeFromHeapType(heapType: HeapTypeRef, nullable: bool): TypeRef {
  return 0;
}
export function _BinaryenTypeIsNullable(type: TypeRef): bool {
  return 0;
}

export function _BinaryenTypeFuncref(): TypeRef {
  return 0;
}
export function _BinaryenTypeExternref(): TypeRef {
  return 0;
}
export function _BinaryenTypeAnyref(): TypeRef {
  return 0;
}
export function _BinaryenTypeEqref(): TypeRef {
  return 0;
}
export function _BinaryenTypeStructref(): TypeRef {
  return 0;
}
export function _BinaryenTypeArrayref(): TypeRef {
  return 0;
}
export function _BinaryenTypeI31ref(): TypeRef {
  return 0;
}
export function _BinaryenTypeStringref(): TypeRef {
  return 0;
}
export function _BinaryenTypeNullref(): TypeRef {
  return 0;
}
export function _BinaryenTypeNullExternref(): TypeRef {
  return 0;
}
export function _BinaryenTypeNullFuncref(): TypeRef {
  return 0;
}

export function _BinaryenHeapTypeFunc(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeExt(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeAny(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeEq(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeI31(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeStruct(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeArray(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeString(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeNone(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeNoext(): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeNofunc(): HeapTypeRef {
  return 0;
}

export function _BinaryenHeapTypeIsBasic(heapType: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenHeapTypeIsSignature(heapType: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenHeapTypeIsStruct(heapType: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenHeapTypeIsArray(heapType: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenHeapTypeIsBottom(heapType: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenHeapTypeGetBottom(heapType: HeapTypeRef): HeapTypeRef {
  return 0;
}
export function _BinaryenHeapTypeIsSubType(left: HeapTypeRef, right: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenStructTypeGetNumFields(heapType: HeapTypeRef): Index {
  return 0;
}
export function _BinaryenStructTypeGetFieldType(heapType: HeapTypeRef, index: Index): TypeRef {
  return 0;
}
export function _BinaryenStructTypeGetFieldPackedType(heapType: HeapTypeRef, index: Index): PackedType {
  return 0;
}
export function _BinaryenStructTypeIsFieldMutable(heapType: HeapTypeRef, index: Index): bool {
  return 0;
}
export function _BinaryenArrayTypeGetElementType(heapType: HeapTypeRef): TypeRef {
  return 0;
}
export function _BinaryenArrayTypeGetElementPackedType(heapType: HeapTypeRef): PackedType {
  return 0;
}
export function _BinaryenArrayTypeIsElementMutable(heapType: HeapTypeRef): bool {
  return 0;
}
export function _BinaryenSignatureTypeGetParams(heapType: HeapTypeRef): TypeRef {
  return 0;
}
export function _BinaryenSignatureTypeGetResults(heapType: HeapTypeRef): TypeRef {
  return 0;
}

export function _BinaryenModuleCreate(): ModuleRef {
  return 0;
}
export function _BinaryenModuleDispose(module: ModuleRef): void {
  return;
}

export function _BinaryenSizeofLiteral(): usize {
  return 0;
}
export function _BinaryenLiteralInt32(literalOut: LiteralRef, x: i32): void {
  return;
}
export function _BinaryenLiteralInt64(literalOut: LiteralRef, x: i32, y: i32): void {
  return;
}
export function _BinaryenLiteralFloat32(literalOut: LiteralRef, x: f32): void {
  return;
}
export function _BinaryenLiteralFloat64(literalOut: LiteralRef, x: f64): void {
  return;
}
export function _BinaryenLiteralVec128(literalOut: LiteralRef, x: ArrayRef<u8>): void {
  return;
}
export function _BinaryenLiteralFloat32Bits(literalOut: LiteralRef, x: i32): void {
  return;
}
export function _BinaryenLiteralFloat64Bits(literalOut: LiteralRef, x: i32, y: i32): void {
  return;
}

export function _BinaryenExpressionGetId(expr: ExpressionRef): ExpressionId {
  return 0;
}
export function _BinaryenExpressionGetType(expr: ExpressionRef): TypeRef {
  return 0;
}
export function _BinaryenExpressionSetType(expr: ExpressionRef, type: TypeRef): void {
  return;
}
export function _BinaryenExpressionPrint(expr: ExpressionRef): void {
  return;
}
export function _BinaryenExpressionCopy(expr: ExpressionRef, module: ModuleRef): ExpressionRef {
  return 0;
}
export function _BinaryenExpressionFinalize(expr: ExpressionRef): void {
  return;
}

export function _BinaryenBlock(
  module: ModuleRef,
  name: StringRef,
  childExprs: ArrayRef<ExpressionRef>,
  numChildren: Index,
  type: TypeRef
): ExpressionRef {
  return 0;
}
export function _BinaryenBlockGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenBlockSetName(expr: ExpressionRef, name: StringRef): void {
  return;
}
export function _BinaryenBlockGetNumChildren(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenBlockGetChildAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenBlockSetChildAt(expr: ExpressionRef, index: Index, childExpr: ExpressionRef): void {
  return;
}
export function _BinaryenBlockAppendChild(expr: ExpressionRef, childExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenBlockInsertChildAt(expr: ExpressionRef, index: Index, childExpr: ExpressionRef): void {
  return;
}
export function _BinaryenBlockRemoveChildAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}

export function _BinaryenIf(
  module: ModuleRef,
  conditionExpr: ExpressionRef,
  ifTrueExpr: ExpressionRef,
  ifFalseExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenIfGetCondition(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenIfSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void {
  return;
}
export function _BinaryenIfGetIfTrue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenIfSetIfTrue(expr: ExpressionRef, ifTrueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenIfGetIfFalse(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenIfSetIfFalse(expr: ExpressionRef, ifFalseExpr: ExpressionRef): void {
  return;
}

export function _BinaryenLoop(module: ModuleRef, name: StringRef, bodyExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenLoopGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenLoopSetName(expr: ExpressionRef, name: StringRef): void {
  return;
}
export function _BinaryenLoopGetBody(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenLoopSetBody(expr: ExpressionRef, bodyExpr: ExpressionRef): void {
  return;
}

export function _BinaryenBreak(
  module: ModuleRef,
  name: StringRef,
  conditionExpr: ExpressionRef,
  valueExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenBreakGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenBreakSetName(expr: ExpressionRef, name: StringRef): void {
  return;
}
export function _BinaryenBreakGetCondition(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenBreakSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void {
  return;
}
export function _BinaryenBreakGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenBreakSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenSwitch(
  module: ModuleRef,
  names: ArrayRef<StringRef>,
  numNames: Index,
  defaultName: StringRef,
  conditionExpr: ExpressionRef,
  valueExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSwitchGetNumNames(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenSwitchGetNameAt(expr: ExpressionRef, index: Index): StringRef {
  return 0;
}
export function _BinaryenSwitchSetNameAt(expr: ExpressionRef, index: Index, name: StringRef): void {
  return;
}
export function _BinaryenSwitchAppendName(expr: ExpressionRef, name: StringRef): Index {
  return 0;
}
export function _BinaryenSwitchInsertNameAt(expr: ExpressionRef, index: Index, name: StringRef): void {
  return;
}
export function _BinaryenSwitchRemoveNameAt(expr: ExpressionRef, index: Index): StringRef {
  return 0;
}
export function _BinaryenSwitchGetDefaultName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenSwitchSetDefaultName(expr: ExpressionRef, defaultName: StringRef): void {
  return;
}
export function _BinaryenSwitchGetCondition(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSwitchSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSwitchGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSwitchSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenCall(
  module: ModuleRef,
  targetName: StringRef,
  operandExprs: ArrayRef<ExpressionRef>,
  numOperands: Index,
  returnType: TypeRef
): ExpressionRef {
  return 0;
}
export function _BinaryenCallGetTarget(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenCallSetTarget(expr: ExpressionRef, targetName: StringRef): void {
  return;
}
export function _BinaryenCallGetNumOperands(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenCallGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenCallSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenCallInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenCallIsReturn(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenCallSetReturn(expr: ExpressionRef, isReturn: bool): void {
  return;
}
// ^ with return = true
export function _BinaryenReturnCall(
  module: ModuleRef,
  targetName: StringRef,
  operandExprs: ArrayRef<ExpressionRef>,
  numOperands: Index,
  returnType: TypeRef
): ExpressionRef {
  return 0;
}

export function _BinaryenCallIndirect(
  module: ModuleRef,
  table: StringRef,
  targetExpr: ExpressionRef,
  operandExprs: ArrayRef<ExpressionRef>,
  numOperands: Index,
  params: TypeRef,
  results: TypeRef
): ExpressionRef {
  return 0;
}
export function _BinaryenCallIndirectGetTable(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenCallIndirectSetTable(expr: ExpressionRef, table: StringRef): void {
  return;
}
export function _BinaryenCallIndirectGetTarget(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenCallIndirectSetTarget(expr: ExpressionRef, targetExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallIndirectGetNumOperands(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenCallIndirectGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenCallIndirectSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallIndirectAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenCallIndirectInsertOperandAt(
  expr: ExpressionRef,
  index: Index,
  operandExpr: ExpressionRef
): void {
  return;
}
export function _BinaryenCallIndirectRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenCallIndirectIsReturn(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenCallIndirectSetReturn(expr: ExpressionRef, isReturn: bool): void {
  return;
}
// ^ with return = true
export function _BinaryenReturnCallIndirect(
  module: ModuleRef,
  table: StringRef,
  targetExpr: ExpressionRef,
  operandExprs: ArrayRef<ExpressionRef>,
  numOperands: Index,
  params: TypeRef,
  results: TypeRef
): ExpressionRef {
  return 0;
}

export function _BinaryenLocalGet(module: ModuleRef, index: Index, type: TypeRef): ExpressionRef {
  return 0;
}
export function _BinaryenLocalGetGetIndex(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenLocalGetSetIndex(expr: ExpressionRef, index: Index): void {
  return;
}

export function _BinaryenLocalSet(module: ModuleRef, index: Index, valueExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenLocalSetIsTee(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenLocalSetGetIndex(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenLocalSetSetIndex(expr: ExpressionRef, index: Index): void {
  return;
}
export function _BinaryenLocalSetGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenLocalSetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}
// ^ with type != none
export function _BinaryenLocalTee(
  module: ModuleRef,
  index: Index,
  valueExpr: ExpressionRef,
  type: TypeRef
): ExpressionRef {
  return 0;
}

export function _BinaryenGlobalGet(module: ModuleRef, name: StringRef, type: TypeRef): ExpressionRef {
  return 0;
}
export function _BinaryenGlobalGetGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenGlobalGetSetName(expr: ExpressionRef, name: StringRef): void {
  return;
}

export function _BinaryenGlobalSet(module: ModuleRef, name: StringRef, value: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenGlobalSetGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenGlobalSetSetName(expr: ExpressionRef, name: StringRef): void {
  return;
}
export function _BinaryenGlobalSetGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenGlobalSetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenMemorySize(module: ModuleRef, memoryName: StringRef, memoryIs64: bool): ExpressionRef {
  return 0;
}

export function _BinaryenMemoryGrow(
  module: ModuleRef,
  delta: ExpressionRef,
  memoryName: StringRef,
  memoryIs64: bool
): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryGrowGetDelta(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryGrowSetDelta(expr: ExpressionRef, delta: ExpressionRef): void {
  return;
}

export function _BinaryenLoad(
  module: ModuleRef,
  bytes: u32,
  signed: bool,
  offset: u32,
  align: u32,
  type: TypeRef,
  ptrExpr: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenLoadIsAtomic(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenLoadSetAtomic(expr: ExpressionRef, isAtomic: bool): void {
  return;
}
export function _BinaryenLoadIsSigned(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenLoadSetSigned(expr: ExpressionRef, isSigned: bool): void {
  return;
}
export function _BinaryenLoadGetOffset(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenLoadSetOffset(expr: ExpressionRef, offset: u32): void {
  return;
}
export function _BinaryenLoadGetBytes(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenLoadSetBytes(expr: ExpressionRef, bytes: u32): void {
  return;
}
export function _BinaryenLoadGetAlign(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenLoadSetAlign(expr: ExpressionRef, align: u32): void {
  return;
}
export function _BinaryenLoadGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenLoadSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
// ^ with atomic = true
export function _BinaryenAtomicLoad(
  module: ModuleRef,
  bytes: Index,
  offset: Index,
  type: TypeRef,
  ptrExpr: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}

export function _BinaryenStore(
  module: ModuleRef,
  bytes: u32,
  offset: u32,
  align: u32,
  ptrExpr: ExpressionRef,
  valueExpr: ExpressionRef,
  type: TypeRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenStoreIsAtomic(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenStoreSetAtomic(expr: ExpressionRef, isAtomic: bool): void {
  return;
}
export function _BinaryenStoreGetBytes(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenStoreSetBytes(expr: ExpressionRef, bytes: u32): void {
  return;
}
export function _BinaryenStoreGetOffset(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenStoreSetOffset(expr: ExpressionRef, offset: u32): void {
  return;
}
export function _BinaryenStoreGetAlign(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenStoreSetAlign(expr: ExpressionRef, align: u32): void {
  return;
}
export function _BinaryenStoreGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStoreSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStoreGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStoreSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStoreGetValueType(expr: ExpressionRef): TypeRef {
  return 0;
}
export function _BinaryenStoreSetValueType(expr: ExpressionRef, valueType: TypeRef): void {
  return;
}
// ^ with atomic = true
export function _BinaryenAtomicStore(
  module: ModuleRef,
  bytes: Index,
  offset: Index,
  ptrExpr: ExpressionRef,
  valueExpr: ExpressionRef,
  type: TypeRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}

export function _BinaryenConst(module: ModuleRef, value: LiteralRef): ExpressionRef {
  return 0;
}
export function _BinaryenConstGetValueI32(expr: ExpressionRef): i32 {
  return 0;
}
export function _BinaryenConstSetValueI32(expr: ExpressionRef, value: i32): void {
  return;
}
export function _BinaryenConstGetValueI64Low(expr: ExpressionRef): i32 {
  return 0;
}
export function _BinaryenConstSetValueI64Low(expr: ExpressionRef, value: i32): void {
  return;
}
export function _BinaryenConstGetValueI64High(expr: ExpressionRef): i32 {
  return 0;
}
export function _BinaryenConstSetValueI64High(expr: ExpressionRef, value: i32): void {
  return;
}
export function _BinaryenConstGetValueF32(expr: ExpressionRef): f32 {
  return 0;
}
export function _BinaryenConstSetValueF32(expr: ExpressionRef, value: f32): void {
  return;
}
export function _BinaryenConstGetValueF64(expr: ExpressionRef): f64 {
  return 0;
}
export function _BinaryenConstSetValueF64(expr: ExpressionRef, value: f64): void {
  return;
}
export function _BinaryenConstGetValueV128(expr: ExpressionRef, valueOut: ArrayRef<u8>): void {
  return;
}
export function _BinaryenConstSetValueV128(expr: ExpressionRef, value: ArrayRef<u8>): void {
  return;
}

export function _BinaryenUnary(module: ModuleRef, op: Op, valueExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenUnaryGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenUnarySetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenUnaryGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenUnarySetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenBinary(
  module: ModuleRef,
  op: Op,
  leftExpr: ExpressionRef,
  rightExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenBinaryGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenBinarySetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenBinaryGetLeft(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenBinarySetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void {
  return;
}
export function _BinaryenBinaryGetRight(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenBinarySetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void {
  return;
}

export function _BinaryenSelect(
  module: ModuleRef,
  conditionExpr: ExpressionRef,
  ifTrueExpr: ExpressionRef,
  ifFalseExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSelectGetIfTrue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSelectSetIfTrue(expr: ExpressionRef, ifTrueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSelectGetIfFalse(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSelectSetIfFalse(expr: ExpressionRef, ifFalseExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSelectGetCondition(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSelectSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void {
  return;
}

export function _BinaryenDrop(module: ModuleRef, valueExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenDropGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenDropSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenReturn(module: ModuleRef, valueExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenReturnGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenReturnSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenNop(module: ModuleRef): ExpressionRef {
  return 0;
}

export function _BinaryenUnreachable(module: ModuleRef): ExpressionRef {
  return 0;
}

export function _BinaryenAtomicRMW(
  module: ModuleRef,
  op: Op,
  bytes: u32,
  offset: u32,
  ptrExpr: ExpressionRef,
  valueExpr: ExpressionRef,
  type: TypeRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicRMWGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenAtomicRMWSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenAtomicRMWGetBytes(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenAtomicRMWSetBytes(expr: ExpressionRef, bytes: u32): void {
  return;
}
export function _BinaryenAtomicRMWGetOffset(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenAtomicRMWSetOffset(expr: ExpressionRef, offset: u32): void {
  return;
}
export function _BinaryenAtomicRMWGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicRMWSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicRMWGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicRMWSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenAtomicCmpxchg(
  module: ModuleRef,
  bytes: u32,
  offset: u32,
  ptrExpr: ExpressionRef,
  expectedExpr: ExpressionRef,
  replacementExpr: ExpressionRef,
  type: TypeRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicCmpxchgGetBytes(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenAtomicCmpxchgSetBytes(expr: ExpressionRef, bytes: u32): void {
  return;
}
export function _BinaryenAtomicCmpxchgGetOffset(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenAtomicCmpxchgSetOffset(expr: ExpressionRef, offset: u32): void {
  return;
}
export function _BinaryenAtomicCmpxchgGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicCmpxchgSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicCmpxchgGetExpected(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicCmpxchgSetExpected(expr: ExpressionRef, expectedExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicCmpxchgGetReplacement(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicCmpxchgSetReplacement(expr: ExpressionRef, replacementExpr: ExpressionRef): void {
  return;
}

export function _BinaryenAtomicWait(
  module: ModuleRef,
  ptrExpr: ExpressionRef,
  expectedExpr: ExpressionRef,
  timeoutExpr: ExpressionRef,
  expectedType: TypeRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicWaitGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicWaitSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicWaitGetExpected(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicWaitSetExpected(expr: ExpressionRef, expectedExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicWaitGetTimeout(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicWaitSetTimeout(expr: ExpressionRef, timeoutExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicWaitGetExpectedType(expr: ExpressionRef): TypeRef {
  return 0;
}
export function _BinaryenAtomicWaitSetExpectedType(expr: ExpressionRef, expectedType: TypeRef): void {
  return;
}

export function _BinaryenAtomicNotify(
  module: ModuleRef,
  ptrExpr: ExpressionRef,
  notifyCountExpr: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicNotifyGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicNotifySetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenAtomicNotifyGetNotifyCount(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicNotifySetNotifyCount(expr: ExpressionRef, notifyCountExpr: ExpressionRef): void {
  return;
}

export function _BinaryenAtomicFence(module: ModuleRef, memoryName: StringRef): ExpressionRef {
  return 0;
}
export function _BinaryenAtomicFenceGetOrder(expr: ExpressionRef): u8 {
  return 0;
} // unused
export function _BinaryenAtomicFenceSetOrder(expr: ExpressionRef, order: u8): void {
  return;
} // unused

export function _BinaryenSIMDExtract(module: ModuleRef, op: Op, vecExpr: ExpressionRef, index: u8): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDExtractGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenSIMDExtractSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenSIMDExtractGetVec(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDExtractSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDExtractGetIndex(expr: ExpressionRef): u8 {
  return 0;
}
export function _BinaryenSIMDExtractSetIndex(expr: ExpressionRef, index: u8): void {
  return;
}

export function _BinaryenSIMDReplace(
  module: ModuleRef,
  op: Op,
  vecEpr: ExpressionRef,
  index: u8,
  valueExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDReplaceGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenSIMDReplaceSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenSIMDReplaceGetVec(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDReplaceSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDReplaceGetIndex(expr: ExpressionRef): u8 {
  return 0;
}
export function _BinaryenSIMDReplaceSetIndex(expr: ExpressionRef, index: u8): void {
  return;
}
export function _BinaryenSIMDReplaceGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDReplaceSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenSIMDShuffle(
  module: ModuleRef,
  leftExpr: ExpressionRef,
  rightExpr: ExpressionRef,
  mask: ArrayRef<u8>
): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDShuffleGetLeft(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDShuffleSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDShuffleGetRight(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDShuffleSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDShuffleGetMask(expr: ExpressionRef, maskOut: ArrayRef<u8>): void {
  return;
}
export function _BinaryenSIMDShuffleSetMask(expr: ExpressionRef, mask: ArrayRef<u8>): void {
  return;
}

export function _BinaryenSIMDTernary(
  module: ModuleRef,
  op: Op,
  aExpr: ExpressionRef,
  bExpr: ExpressionRef,
  cExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDTernaryGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenSIMDTernarySetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenSIMDTernaryGetA(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDTernarySetA(expr: ExpressionRef, aExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDTernaryGetB(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDTernarySetB(expr: ExpressionRef, bExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDTernaryGetC(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDTernarySetC(expr: ExpressionRef, cExpr: ExpressionRef): void {
  return;
}

export function _BinaryenSIMDShift(
  module: ModuleRef,
  op: Op,
  vecExpr: ExpressionRef,
  shiftExpr: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDShiftGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenSIMDShiftSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenSIMDShiftGetVec(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDShiftSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDShiftGetShift(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDShiftSetShift(expr: ExpressionRef, shiftExpr: ExpressionRef): void {
  return;
}

export function _BinaryenSIMDLoad(
  module: ModuleRef,
  op: Op,
  offset: u32,
  align: u32,
  ptrExpr: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDLoadGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenSIMDLoadSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenSIMDLoadGetOffset(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenSIMDLoadSetOffset(expr: ExpressionRef, offset: u32): void {
  return;
}
export function _BinaryenSIMDLoadGetAlign(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenSIMDLoadSetAlign(expr: ExpressionRef, align: u32): void {
  return;
}
export function _BinaryenSIMDLoadGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDLoadSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}

export function _BinaryenSIMDLoadStoreLane(
  module: ModuleRef,
  op: Op,
  offset: u32,
  align: u32,
  index: u8,
  ptr: ExpressionRef,
  vec: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenSIMDLoadStoreLaneGetOffset(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneSetOffset(expr: ExpressionRef, offset: u32): void {
  return;
}
export function _BinaryenSIMDLoadStoreLaneGetAlign(expr: ExpressionRef): u32 {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneSetAlign(expr: ExpressionRef, align: u32): void {
  return;
}
export function _BinaryenSIMDLoadStoreLaneGetIndex(expr: ExpressionRef): u8 {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneSetIndex(expr: ExpressionRef, index: u8): void {
  return;
}
export function _BinaryenSIMDLoadStoreLaneGetPtr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDLoadStoreLaneGetVec(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenSIMDLoadStoreLaneSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void {
  return;
}
export function _BinaryenSIMDLoadStoreLaneIsStore(expr: ExpressionRef): bool {
  return 0;
}

export function _BinaryenMemoryInit(
  module: ModuleRef,
  segmentName: StringRef,
  destExpr: ExpressionRef,
  offsetExpr: ExpressionRef,
  sizeExpr: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryInitGetSegment(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenMemoryInitSetSegment(expr: ExpressionRef, segmentName: StringRef): void {
  return;
}
export function _BinaryenMemoryInitGetDest(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryInitSetDest(expr: ExpressionRef, destExpr: ExpressionRef): void {
  return;
}
export function _BinaryenMemoryInitGetOffset(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryInitSetOffset(expr: ExpressionRef, offsetExpr: ExpressionRef): void {
  return;
}
export function _BinaryenMemoryInitGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryInitSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void {
  return;
}

export function _BinaryenDataDrop(module: ModuleRef, segmentName: StringRef): ExpressionRef {
  return 0;
}
export function _BinaryenDataDropGetSegment(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenDataDropSetSegment(expr: ExpressionRef, segmentName: StringRef): void {
  return;
}

export function _BinaryenMemoryCopy(
  module: ModuleRef,
  destExpr: ExpressionRef,
  sourceExpr: ExpressionRef,
  sizeExpr: ExpressionRef,
  destMemoryName: StringRef,
  sourceMemoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryCopyGetDest(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryCopySetDest(expr: ExpressionRef, destExpr: ExpressionRef): void {
  return;
}
export function _BinaryenMemoryCopyGetSource(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryCopySetSource(expr: ExpressionRef, sourceExpr: ExpressionRef): void {
  return;
}
export function _BinaryenMemoryCopyGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryCopySetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void {
  return;
}

export function _BinaryenMemoryFill(
  module: ModuleRef,
  destExpr: ExpressionRef,
  valueExpr: ExpressionRef,
  sizeExpr: ExpressionRef,
  memoryName: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryFillGetDest(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryFillSetDest(expr: ExpressionRef, destExpr: ExpressionRef): void {
  return;
}
export function _BinaryenMemoryFillGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryFillSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenMemoryFillGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenMemoryFillSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void {
  return;
}

export function _BinaryenRefNull(module: ModuleRef, type: TypeRef): ExpressionRef {
  return 0;
}

export function _BinaryenRefIsNull(module: ModuleRef, valueExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefIsNullGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefIsNullSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenRefAs(module: ModuleRef, op: Op, valueExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefAsGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenRefAsSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenRefAsGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefAsSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenRefFunc(module: ModuleRef, funcName: StringRef, type: HeapTypeRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefFuncGetFunc(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenRefFuncSetFunc(expr: ExpressionRef, funcName: StringRef): void {
  return;
}

export function _BinaryenRefEq(module: ModuleRef, leftExpr: ExpressionRef, rightExpr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefEqGetLeft(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefEqSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void {
  return;
}
export function _BinaryenRefEqGetRight(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefEqSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void {
  return;
}

export function _BinaryenTableGet(
  module: ModuleRef,
  name: StringRef,
  index: ExpressionRef,
  type: TypeRef
): ExpressionRef {
  return 0;
}
export function _BinaryenTableGetGetTable(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenTableGetSetTable(expr: ExpressionRef, table: StringRef): void {
  return;
}
export function _BinaryenTableGetGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTableGetSetIndex(expr: ExpressionRef, index: ExpressionRef): void {
  return;
}

export function _BinaryenTableSet(
  module: ModuleRef,
  name: StringRef,
  index: ExpressionRef,
  value: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenTableSetGetTable(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenTableSetSetTable(expr: ExpressionRef, table: StringRef): void {
  return;
}
export function _BinaryenTableSetGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTableSetSetIndex(expr: ExpressionRef, index: ExpressionRef): void {
  return;
}
export function _BinaryenTableSetGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTableSetSetValue(expr: ExpressionRef, value: ExpressionRef): void {
  return;
}

export function _BinaryenTableSize(module: ModuleRef, name: StringRef): ExpressionRef {
  return 0;
}
export function _BinaryenTableSizeGetTable(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenTableSizeSetTable(expr: ExpressionRef, table: StringRef): void {
  return;
}

export function _BinaryenTableGrow(
  module: ModuleRef,
  name: StringRef,
  value: ExpressionRef,
  delta: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenTableGrowGetTable(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenTableGrowSetTable(expr: ExpressionRef, table: StringRef): void {
  return;
}
export function _BinaryenTableGrowGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTableGrowSetValue(expr: ExpressionRef, value: ExpressionRef): void {
  return;
}
export function _BinaryenTableGrowGetDelta(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTableGrowSetDelta(expr: ExpressionRef, delta: ExpressionRef): void {
  return;
}

export function _BinaryenTry(
  module: ModuleRef,
  name: StringRef,
  bodyExpr: ExpressionRef,
  catchTags: ArrayRef<StringRef>,
  numCatchTags: Index,
  catchBodies: ArrayRef<ExpressionRef>,
  numCatchBodies: Index,
  delegateTarget: StringRef
): ExpressionRef {
  return 0;
}
export function _BinaryenTryGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenTrySetName(expr: ExpressionRef, name: StringRef): void {
  return;
}
export function _BinaryenTryGetBody(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTrySetBody(expr: ExpressionRef, bodyExpr: ExpressionRef): void {
  return;
}
export function _BinaryenTryGetNumCatchTags(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenTryGetNumCatchBodies(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenTryGetCatchTagAt(expr: ExpressionRef, index: Index): StringRef {
  return 0;
}
export function _BinaryenTrySetCatchTagAt(expr: ExpressionRef, index: Index, catchTag: StringRef): void {
  return;
}
export function _BinaryenTryAppendCatchTag(expr: ExpressionRef, catchTag: StringRef): Index {
  return 0;
}
export function _BinaryenTryInsertCatchTagAt(expr: ExpressionRef, index: Index, catchTag: StringRef): void {
  return;
}
export function _BinaryenTryRemoveCatchTagAt(expr: ExpressionRef, index: Index): StringRef {
  return 0;
}
export function _BinaryenTryGetCatchBodyAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenTrySetCatchBodyAt(expr: ExpressionRef, index: Index, catchExpr: ExpressionRef): void {
  return;
}
export function _BinaryenTryAppendCatchBody(expr: ExpressionRef, catchExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenTryInsertCatchBodyAt(expr: ExpressionRef, index: Index, catchExpr: ExpressionRef): void {
  return;
}
export function _BinaryenTryRemoveCatchBodyAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenTryHasCatchAll(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenTryGetDelegateTarget(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenTrySetDelegateTarget(expr: ExpressionRef, delegateTarget: StringRef): void {
  return;
}
export function _BinaryenTryIsDelegate(expr: ExpressionRef): bool {
  return 0;
}

export function _BinaryenThrow(
  module: ModuleRef,
  tagName: StringRef,
  operands: ArrayRef<ExpressionRef>,
  numOperands: Index
): ExpressionRef {
  return 0;
}
export function _BinaryenThrowGetTag(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenThrowSetTag(expr: ExpressionRef, tagName: StringRef): void {
  return;
}
export function _BinaryenThrowGetNumOperands(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenThrowGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenThrowSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenThrowAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenThrowInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenThrowRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}

export function _BinaryenRethrow(module: ModuleRef, target: StringRef): ExpressionRef {
  return 0;
}
export function _BinaryenRethrowGetTarget(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenRethrowSetDepth(expr: ExpressionRef, target: StringRef): void {
  return;
}

export function _BinaryenTupleMake(
  module: ModuleRef,
  operandExprs: ArrayRef<ExpressionRef>,
  numOperands: Index
): ExpressionRef {
  return 0;
}
export function _BinaryenTupleMakeGetNumOperands(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenTupleMakeGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenTupleMakeSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenTupleMakeAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenTupleMakeInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenTupleMakeRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}

export function _BinaryenTupleExtract(module: ModuleRef, tupleExpr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenTupleExtractGetTuple(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenTupleExtractSetTuple(expr: ExpressionRef, tupleExpr: ExpressionRef): void {
  return;
}
export function _BinaryenTupleExtractGetIndex(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenTupleExtractSetIndex(expr: ExpressionRef, index: Index): void {
  return;
}

export function _BinaryenPop(module: ModuleRef, type: TypeRef): ExpressionRef {
  return 0;
}

export function _BinaryenRefI31(module: ModuleRef, value: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefI31GetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefI31SetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenI31Get(module: ModuleRef, i31Expr: ExpressionRef, signed: bool): ExpressionRef {
  return 0;
}
export function _BinaryenI31GetGetI31(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenI31GetSetI31(expr: ExpressionRef, i31Expr: ExpressionRef): void {
  return;
}
export function _BinaryenI31GetIsSigned(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenI31GetSetSigned(expr: ExpressionRef, signed: bool): void {
  return;
}

export function _BinaryenCallRef(
  module: ModuleRef,
  target: ExpressionRef,
  operands: ArrayRef<ExpressionRef>,
  numOperands: Index,
  type: TypeRef,
  isReturn: bool
): ExpressionRef {
  return 0;
}
export function _BinaryenCallRefGetNumOperands(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenCallRefGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenCallRefSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallRefAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenCallRefInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallRefRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenCallRefGetTarget(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenCallRefSetTarget(expr: ExpressionRef, targetExpr: ExpressionRef): void {
  return;
}
export function _BinaryenCallRefIsReturn(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenCallRefSetReturn(expr: ExpressionRef, isReturn: bool): void {
  return;
}

export function _BinaryenRefTest(module: ModuleRef, refExpr: ExpressionRef, castType: HeapTypeRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefTestGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefTestSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenRefTestGetCastType(expr: ExpressionRef): HeapTypeRef {
  return 0;
}
export function _BinaryenRefTestSetCastType(expr: ExpressionRef, castType: HeapTypeRef): void {
  return;
}

export function _BinaryenRefCast(module: ModuleRef, refExpr: ExpressionRef, intendedType: HeapTypeRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefCastGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenRefCastSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}

export function _BinaryenBrOn(
  module: ModuleRef,
  op: Op,
  name: StringRef,
  ref: ExpressionRef,
  castType: HeapTypeRef
): ExpressionRef {
  return 0;
}
export function _BinaryenBrOnGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenBrOnSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenBrOnGetName(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenBrOnSetName(expr: ExpressionRef, nameStr: StringRef): void {
  return;
}
export function _BinaryenBrOnGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenBrOnSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenBrOnGetCastType(expr: ExpressionRef): HeapTypeRef {
  return 0;
}
export function _BinaryenBrOnSetCastType(expr: ExpressionRef, castType: HeapTypeRef): void {
  return;
}

export function _BinaryenStructNew(
  module: ModuleRef,
  operands: ArrayRef<ExpressionRef>,
  numOperands: Index,
  type: HeapTypeRef
): ExpressionRef {
  return 0;
}
export function _BinaryenStructNewGetNumOperands(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenStructNewGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenStructNewSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStructNewAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenStructNewInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStructNewRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}

export function _BinaryenStructGet(
  module: ModuleRef,
  index: Index,
  ref: ExpressionRef,
  type: TypeRef,
  signed: bool
): ExpressionRef {
  return 0;
}
export function _BinaryenStructGetGetIndex(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenStructGetSetIndex(expr: ExpressionRef, index: Index): void {
  return;
}
export function _BinaryenStructGetGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStructGetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStructGetIsSigned(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenStructGetSetSigned(expr: ExpressionRef, signed: bool): void {
  return;
}

export function _BinaryenStructSet(
  module: ModuleRef,
  index: Index,
  ref: ExpressionRef,
  value: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenStructSetGetIndex(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenStructSetSetIndex(expr: ExpressionRef, index: Index): void {
  return;
}
export function _BinaryenStructSetGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStructSetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStructSetGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStructSetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenArrayNew(
  module: ModuleRef,
  type: HeapTypeRef,
  size: ExpressionRef,
  init: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewGetInit(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewSetInit(expr: ExpressionRef, initExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayNewGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void {
  return;
}

export function _BinaryenArrayNewFixed(
  module: ModuleRef,
  type: HeapTypeRef,
  values: ArrayRef<ExpressionRef>,
  numValues: Index
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewFixedGetNumValues(expr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenArrayNewFixedGetValueAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewFixedSetValueAt(expr: ExpressionRef, index: Index, valueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayNewFixedAppendValue(expr: ExpressionRef, valueExpr: ExpressionRef): Index {
  return 0;
}
export function _BinaryenArrayNewFixedInsertValueAt(expr: ExpressionRef, index: Index, valueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayNewFixedRemoveValueAt(expr: ExpressionRef, index: Index): ExpressionRef {
  return 0;
}

export function _BinaryenArrayNewData(
  module: ModuleRef,
  type: HeapTypeRef,
  name: StringRef,
  offset: ExpressionRef,
  size: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewDataGetSegment(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenArrayNewDataSetSegment(expr: ExpressionRef, segment: StringRef): void {
  return;
}
export function _BinaryenArrayNewDataGetOffset(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewDataSetOffset(expr: ExpressionRef, offset: ExpressionRef): void {
  return;
}
export function _BinaryenArrayNewDataGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewDataSetSize(expr: ExpressionRef, size: ExpressionRef): void {
  return;
}

export function _BinaryenArrayNewElem(
  module: ModuleRef,
  type: HeapTypeRef,
  seg: StringRef,
  offset: ExpressionRef,
  size: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewElemGetSegment(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenArrayNewElemSetSegment(expr: ExpressionRef, segment: StringRef): void {
  return;
}
export function _BinaryenArrayNewElemGetOffset(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewElemSetOffset(expr: ExpressionRef, offset: ExpressionRef): void {
  return;
}
export function _BinaryenArrayNewElemGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayNewElemSetSize(expr: ExpressionRef, size: ExpressionRef): void {
  return;
}

export function _BinaryenArrayGet(
  module: ModuleRef,
  ref: ExpressionRef,
  index: ExpressionRef,
  type: TypeRef,
  signed: bool
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayGetGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayGetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayGetGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayGetSetIndex(expr: ExpressionRef, indexExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayGetIsSigned(expr: ExpressionRef): bool {
  return 0;
}
export function _BinaryenArrayGetSetSigned(expr: ExpressionRef, signed: bool): void {
  return;
}

export function _BinaryenArraySet(
  module: ModuleRef,
  ref: ExpressionRef,
  index: ExpressionRef,
  value: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArraySetGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArraySetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArraySetGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArraySetSetIndex(expr: ExpressionRef, indexExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArraySetGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArraySetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}

export function _BinaryenArrayLen(module: ModuleRef, ref: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayLenGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayLenSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}

export function _BinaryenArrayFill(
  module: ModuleRef,
  ref: ExpressionRef,
  index: ExpressionRef,
  value: ExpressionRef,
  size: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayFillGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayFillSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayFillGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayFillSetIndex(expr: ExpressionRef, indexExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayFillGetValue(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayFillSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayFillGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayFillSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void {
  return;
}

export function _BinaryenArrayCopy(
  module: ModuleRef,
  destRef: ExpressionRef,
  destIndex: ExpressionRef,
  srcRef: ExpressionRef,
  srcIndex: ExpressionRef,
  length: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayCopyGetDestRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayCopySetDestRef(expr: ExpressionRef, destRefExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayCopyGetDestIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayCopySetDestIndex(expr: ExpressionRef, destIndexExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayCopyGetSrcRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayCopySetSrcRef(expr: ExpressionRef, srcRefExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayCopyGetSrcIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayCopySetSrcIndex(expr: ExpressionRef, srcIndexExpr: ExpressionRef): void {
  return;
}
export function _BinaryenArrayCopyGetLength(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayCopySetLength(expr: ExpressionRef, lengthExpr: ExpressionRef): void {
  return;
}

export function _BinaryenArrayInitData(
  module: ModuleRef,
  name: StringRef,
  ref: ExpressionRef,
  index: ExpressionRef,
  offset: ExpressionRef,
  size: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitDataGetSegment(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenArrayInitDataSetSegment(expr: ExpressionRef, segment: StringRef): void {
  return;
}
export function _BinaryenArrayInitDataGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitDataSetRef(expr: ExpressionRef, ref: ExpressionRef): void {
  return;
}
export function _BinaryenArrayInitDataGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitDataSetIndex(expr: ExpressionRef, index: ExpressionRef): void {
  return;
}
export function _BinaryenArrayInitDataGetOffset(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitDataSetOffset(expr: ExpressionRef, offset: ExpressionRef): void {
  return;
}
export function _BinaryenArrayInitDataGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitDataSetSize(expr: ExpressionRef, size: ExpressionRef): void {
  return;
}

export function _BinaryenArrayInitElem(
  module: ModuleRef,
  seg: StringRef,
  ref: ExpressionRef,
  index: ExpressionRef,
  offset: ExpressionRef,
  size: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitElemGetSegment(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenArrayInitElemSetSegment(expr: ExpressionRef, segment: StringRef): void {
  return;
}
export function _BinaryenArrayInitElemGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitElemSetRef(expr: ExpressionRef, ref: ExpressionRef): void {
  return;
}
export function _BinaryenArrayInitElemGetIndex(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitElemSetIndex(expr: ExpressionRef, index: ExpressionRef): void {
  return;
}
export function _BinaryenArrayInitElemGetOffset(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitElemSetOffset(expr: ExpressionRef, offset: ExpressionRef): void {
  return;
}
export function _BinaryenArrayInitElemGetSize(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenArrayInitElemSetSize(expr: ExpressionRef, size: ExpressionRef): void {
  return;
}

export function _BinaryenStringNew(module: ModuleRef, op: Op, ref: ExpressionRef, start: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringNewGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenStringNewSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenStringNewGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringNewSetRef(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringNewGetStart(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringNewSetStart(expr: ExpressionRef, startExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringNewGetEnd(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringNewSetEnd(expr: ExpressionRef, endExpr: ExpressionRef): void {
  return;
}

export function _BinaryenStringConst(module: ExpressionRef, name: StringRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringConstGetString(expr: ExpressionRef): StringRef {
  return 0;
}
export function _BinaryenStringConstSetString(expr: ExpressionRef, string: StringRef): void {
  return;
}

export function _BinaryenStringMeasure(module: ExpressionRef, op: Op, ref: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringMeasureGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenStringMeasureSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenStringMeasureGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringMeasureSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}

export function _BinaryenStringEncode(
  module: ExpressionRef,
  op: Op,
  ref: ExpressionRef,
  ptr: ExpressionRef,
  start: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenStringEncodeGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenStringEncodeSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenStringEncodeGetStr(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringEncodeSetStr(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringEncodeGetArray(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringEncodeSetArray(expr: ExpressionRef, ptrExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringEncodeGetStart(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringEncodeSetStart(expr: ExpressionRef, startExpr: ExpressionRef): void {
  return;
}

export function _BinaryenStringConcat(module: ExpressionRef, left: ExpressionRef, right: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringConcatGetLeft(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringConcatSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringConcatGetRight(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringConcatSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void {
  return;
}

export function _BinaryenStringEq(
  module: ExpressionRef,
  op: Op,
  left: ExpressionRef,
  right: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenStringEqGetOp(expr: ExpressionRef): Op {
  return 0;
}
export function _BinaryenStringEqSetOp(expr: ExpressionRef, op: Op): void {
  return;
}
export function _BinaryenStringEqGetLeft(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringEqSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringEqGetRight(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringEqSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void {
  return;
}

export function _BinaryenStringWTF16Get(module: ExpressionRef, ref: ExpressionRef, pos: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringWTF16GetGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringWTF16GetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringWTF16GetGetPos(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringWTF16GetSetPos(expr: ExpressionRef, posExpr: ExpressionRef): void {
  return;
}

export function _BinaryenStringSliceWTF(
  module: ExpressionRef,
  ref: ExpressionRef,
  start: ExpressionRef,
  end: ExpressionRef
): ExpressionRef {
  return 0;
}
export function _BinaryenStringSliceWTFGetRef(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringSliceWTFSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringSliceWTFGetStart(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringSliceWTFSetStart(expr: ExpressionRef, startExpr: ExpressionRef): void {
  return;
}
export function _BinaryenStringSliceWTFGetEnd(expr: ExpressionRef): ExpressionRef {
  return 0;
}
export function _BinaryenStringSliceWTFSetEnd(expr: ExpressionRef, endExpr: ExpressionRef): void {
  return;
}

export function _BinaryenAddFunction(
  module: ModuleRef,
  name: StringRef,
  params: TypeRef,
  results: TypeRef,
  varTypes: ArrayRef<TypeRef>,
  numVarTypes: Index,
  body: ExpressionRef
): FunctionRef {
  return 0;
}
export function _BinaryenGetFunction(module: ModuleRef, name: StringRef): FunctionRef {
  return 0;
}
export function _BinaryenRemoveFunction(module: ModuleRef, name: StringRef): void {
  return;
}
export function _BinaryenGetNumFunctions(module: ModuleRef): Index {
  return 0;
}
export function _BinaryenGetFunctionByIndex(module: ModuleRef, index: Index): FunctionRef {
  return 0;
}

export function _BinaryenFunctionGetName(func: FunctionRef): StringRef {
  return 0;
}
export function _BinaryenFunctionGetParams(func: FunctionRef): TypeRef {
  return 0;
}
export function _BinaryenFunctionGetResults(func: FunctionRef): TypeRef {
  return 0;
}
export function _BinaryenFunctionGetNumVars(func: FunctionRef): Index {
  return 0;
}
export function _BinaryenFunctionGetVar(func: FunctionRef, index: Index): TypeRef {
  return 0;
}
export function _BinaryenFunctionAddVar(func: FunctionRef, type: TypeRef): Index {
  return 0;
}
export function _BinaryenFunctionGetNumLocals(func: FunctionRef): Index {
  return 0;
}
export function _BinaryenFunctionHasLocalName(func: FunctionRef, index: Index): bool {
  return 0;
}
export function _BinaryenFunctionGetLocalName(func: FunctionRef, index: Index): StringRef {
  return 0;
}
export function _BinaryenFunctionSetLocalName(func: FunctionRef, index: Index, name: StringRef): void {
  return;
}
export function _BinaryenFunctionGetBody(func: FunctionRef): ExpressionRef {
  return 0;
}
export function _BinaryenFunctionSetBody(func: FunctionRef, bodyExpr: ExpressionRef): void {
  return;
}
export function _BinaryenFunctionGetType(func: FunctionRef): HeapTypeRef {
  return 0;
}
export function _BinaryenFunctionSetType(func: FunctionRef, type: HeapTypeRef): void {
  return;
}
export function _BinaryenFunctionOptimize(func: FunctionRef, module: ModuleRef): void {
  return;
}
export function _BinaryenFunctionRunPasses(
  func: FunctionRef,
  module: ModuleRef,
  passes: ArrayRef<StringRef>,
  numPasses: Index
): void {
  return;
}
export function _BinaryenFunctionSetDebugLocation(
  func: FunctionRef,
  expr: ExpressionRef,
  fileIndex: Index,
  lineNumber: Index,
  columnNumber: Index
): void {
  return;
}

export function _BinaryenAddFunctionImport(
  module: ModuleRef,
  internalName: StringRef,
  externalModuleName: StringRef,
  externalBaseName: StringRef,
  params: TypeRef,
  results: TypeRef
): void {
  return;
}
export function _BinaryenAddTableImport(
  module: ModuleRef,
  internalName: StringRef,
  externalModuleName: StringRef,
  externalBaseName: StringRef
): void {
  return;
}
export function _BinaryenAddMemoryImport(
  module: ModuleRef,
  internalName: StringRef,
  externalModuleName: StringRef,
  externalBaseName: StringRef,
  shared: bool
): void {
  return;
}
export function _BinaryenAddGlobalImport(
  module: ModuleRef,
  internalName: StringRef,
  externalModuleName: StringRef,
  externalBaseName: StringRef,
  globalType: TypeRef,
  mutable: bool
): void {
  return;
}
export function _BinaryenAddTagImport(
  module: ModuleRef,
  internalName: StringRef,
  externalModuleName: StringRef,
  externalBaseName: StringRef,
  params: TypeRef,
  results: TypeRef
): void {
  return;
}

export function _BinaryenAddFunctionExport(
  module: ModuleRef,
  internalName: StringRef,
  externalName: StringRef
): ExportRef {
  return 0;
}
export function _BinaryenAddTableExport(
  module: ModuleRef,
  internalName: StringRef,
  externalName: StringRef
): ExportRef {
  return 0;
}
export function _BinaryenAddMemoryExport(
  module: ModuleRef,
  internalName: StringRef,
  externalName: StringRef
): ExportRef {
  return 0;
}
export function _BinaryenAddGlobalExport(
  module: ModuleRef,
  internalName: StringRef,
  externalName: StringRef
): ExportRef {
  return 0;
}
export function _BinaryenAddTagExport(module: ModuleRef, internalName: StringRef, externalName: StringRef): ExportRef {
  return 0;
}
export function _BinaryenGetExport(module: ModuleRef, externalName: StringRef): ExportRef {
  return 0;
}
export function _BinaryenRemoveExport(module: ModuleRef, externalName: StringRef): void {
  return;
}
export function _BinaryenGetNumExports(module: ModuleRef): Index {
  return 0;
}
export function _BinaryenGetExportByIndex(module: ModuleRef, index: Index): ExportRef {
  return 0;
}
export function _BinaryenExportGetKind(ref: ExportRef): ExternalKind {
  return 0;
}
export function _BinaryenExportGetName(ref: ExportRef): StringRef {
  return 0;
}
export function _BinaryenExportGetValue(ref: ExportRef): StringRef {
  return 0;
}

export function _BinaryenAddGlobal(
  module: ModuleRef,
  name: StringRef,
  type: TypeRef,
  mutable: bool,
  init: ExpressionRef
): GlobalRef {
  return 0;
}
export function _BinaryenGetGlobal(module: ModuleRef, name: StringRef): GlobalRef {
  return 0;
}
export function _BinaryenRemoveGlobal(module: ModuleRef, name: StringRef): void {
  return;
}
export function _BinaryenGetNumGlobals(module: ModuleRef): Index {
  return 0;
}
export function _BinaryenGetGlobalByIndex(module: ModuleRef, index: Index): GlobalRef {
  return 0;
}

export function _BinaryenGlobalGetName(global: GlobalRef): StringRef {
  return 0;
}
export function _BinaryenGlobalGetType(global: GlobalRef): TypeRef {
  return 0;
}
export function _BinaryenGlobalIsMutable(global: GlobalRef): bool {
  return 0;
}
export function _BinaryenGlobalGetInitExpr(global: GlobalRef): ExpressionRef {
  return 0;
}

export function _BinaryenAddTag(module: ModuleRef, name: StringRef, params: TypeRef, results: TypeRef): TagRef {
  return 0;
}
export function _BinaryenGetTag(module: ModuleRef, name: StringRef): TagRef {
  return 0;
}
export function _BinaryenRemoveTag(module: ModuleRef, name: StringRef): void {
  return;
}

export function _BinaryenTagGetName(tag: TagRef): StringRef {
  return 0;
}
export function _BinaryenTagGetParams(tag: TagRef): TypeRef {
  return 0;
}
export function _BinaryenTagGetResults(tag: TagRef): TypeRef {
  return 0;
}

export function _BinaryenAddTable(
  module: ModuleRef,
  name: StringRef,
  initial: Index,
  maximum: Index,
  type: TypeRef
): TableRef {
  return 0;
}
export function _BinaryenRemoveTable(module: ModuleRef, table: StringRef): void {
  return;
}
export function _BinaryenGetNumTables(module: ModuleRef): Index {
  return 0;
}
export function _BinaryenGetTable(module: ModuleRef, name: StringRef): TableRef {
  return 0;
}
export function _BinaryenGetTableByIndex(module: ModuleRef, index: Index): TableRef {
  return 0;
}

export function _BinaryenTableGetName(table: TableRef): StringRef {
  return 0;
}
export function _BinaryenTableSetName(table: TableRef, name: StringRef): void {
  return;
}
export function _BinaryenTableGetInitial(table: TableRef): Index {
  return 0;
}
export function _BinaryenTableSetInitial(table: TableRef, initial: Index): void {
  return;
}
export function _BinaryenTableHasMax(table: TableRef): bool {
  return 0;
}
export function _BinaryenTableGetMax(table: TableRef): Index {
  return 0;
}
export function _BinaryenTableSetMax(table: TableRef, max: Index): void {
  return;
}
export function _BinaryenTableGetType(table: TableRef): TypeRef {
  return 0;
}
export function _BinaryenTableSetType(table: TableRef, type: TypeRef): void {
  return;
}

export function _BinaryenAddActiveElementSegment(
  module: ModuleRef,
  table: StringRef,
  name: StringRef,
  funcNames: ArrayRef<StringRef>,
  numFuncNames: Index,
  offset: ExpressionRef
): ElementSegmentRef {
  return 0;
}
export function _BinaryenAddPassiveElementSegment(
  module: ModuleRef,
  name: StringRef,
  funcNames: ArrayRef<StringRef>,
  numFuncNames: Index
): ElementSegmentRef {
  return 0;
}
export function _BinaryenRemoveElementSegment(module: ModuleRef, name: StringRef): void {
  return;
}
export function _BinaryenGetNumElementSegments(module: ModuleRef, name: StringRef): Index {
  return 0;
}
export function _BinaryenGetElementSegment(module: ModuleRef, name: StringRef): ElementSegmentRef {
  return 0;
}
export function _BinaryenGetElementSegmentByIndex(module: ModuleRef, index: Index): ElementSegmentRef {
  return 0;
}

export function _BinaryenSetMemory(
  module: ModuleRef,
  initial: Index,
  maximum: Index,
  exportName: StringRef,
  segmentNames: ArrayRef<StringRef>,
  segmentDatas: ArrayRef<ArrayRef<u8>>,
  segmentPassive: ArrayRef<bool>,
  segmentOffsets: ArrayRef<usize>,
  segmentSizes: ArrayRef<u32>,
  numSegments: Index,
  shared: bool,
  memory64: bool,
  name: StringRef
): void {
  return;
}
export function _BinaryenGetNumMemorySegments(module: ModuleRef): Index {
  return 0;
}
export function _BinaryenGetMemorySegmentByteOffset(module: ModuleRef, segmentName: StringRef): u32 {
  return 0;
}
export function _BinaryenGetMemorySegmentByteLength(module: ModuleRef, segmentName: StringRef): usize {
  return 0;
}
export function _BinaryenCopyMemorySegmentData(module: ModuleRef, segmentName: StringRef, buffer: ArrayRef<u8>): void {
  return;
}
export function _BinaryenAddDataSegment(
  module: ModuleRef,
  segmentName: StringRef,
  memoryName: StringRef,
  segmentPassive: bool,
  segmentOffset: ExpressionRef,
  segmentData: ArrayRef<u8>,
  segmentSize: Index
): void {
  return;
}

export function _BinaryenSetStart(module: ModuleRef, start: FunctionRef): void {
  return;
}
export function _BinaryenGetStart(module: ModuleRef): FunctionRef {
  return 0;
}

export function _BinaryenModuleParse(text: StringRef): ModuleRef {
  return 0;
}
export function _BinaryenModulePrint(module: ModuleRef): void {
  return;
}
export function _BinaryenModulePrintAsmjs(module: ModuleRef): void {
  return;
}
export function _BinaryenModuleValidate(module: ModuleRef): i32 {
  return 0;
}
export function _BinaryenModuleOptimize(module: ModuleRef): void {
  return;
}
export function _BinaryenModuleRunPasses(module: ModuleRef, passes: ArrayRef<StringRef>, numPasses: Index): void {
  return;
}
export function _BinaryenSizeofAllocateAndWriteResult(): i32 {
  return 0;
}
export function _BinaryenModuleAllocateAndWrite(
  resultOut: BinaryenModuleAllocateAndWriteResultRef,
  module: ModuleRef,
  sourceMapUrl: StringRef
): void {
  return;
}
export function _BinaryenModuleAllocateAndWriteText(module: ModuleRef): StringRef {
  return 0;
}
export function _BinaryenModuleAllocateAndWriteStackIR(module: ModuleRef): StringRef {
  return 0;
}
export function _BinaryenModuleRead(input: ArrayRef<u8>, inputSize: usize): ModuleRef {
  return 0;
}
export function _BinaryenModuleReadWithFeatures(
  input: ArrayRef<u8>,
  inputSize: usize,
  featureFlags: FeatureFlags
): ModuleRef {
  return 0;
}
export function _BinaryenModuleInterpret(module: ModuleRef): void {
  return;
}
export function _BinaryenModuleAddDebugInfoFileName(module: ModuleRef, filename: StringRef): Index {
  return 0;
}
export function _BinaryenModuleGetDebugInfoFileName(module: ModuleRef, index: Index): StringRef {
  return 0;
}
export function _BinaryenModuleGetFeatures(module: ModuleRef): FeatureFlags {
  return 0;
}
export function _BinaryenModuleSetFeatures(module: ModuleRef, featureFlags: FeatureFlags): void {
  return;
}

export function _BinaryenAddCustomSection(
  module: ModuleRef,
  name: StringRef,
  contents: ArrayRef<u8>,
  contentsSize: Index
): void {
  return;
}

export function _BinaryenExpressionGetSideEffects(expr: ExpressionRef, module: ModuleRef): SideEffects {
  return 0;
}

export function _RelooperCreate(module: ModuleRef): RelooperRef {
  return 0;
}
export function _RelooperAddBlock(relooper: RelooperRef, code: ExpressionRef): RelooperBlockRef {
  return 0;
}
export function _RelooperAddBranch(
  from: RelooperBlockRef,
  to: RelooperBlockRef,
  condition: ExpressionRef,
  code: ExpressionRef
): void {
  return;
}
export function _RelooperAddBlockWithSwitch(
  relooper: RelooperRef,
  code: ExpressionRef,
  condition: ExpressionRef
): RelooperBlockRef {
  return 0;
}
export function _RelooperAddBranchForSwitch(
  from: RelooperBlockRef,
  to: RelooperBlockRef,
  indexes: ArrayRef<Index>,
  numIndexes: Index,
  code: ExpressionRef
): void {
  return;
}
export function _RelooperRenderAndDispose(
  relooper: RelooperRef,
  entry: RelooperBlockRef,
  labelHelper: Index
): ExpressionRef {
  return 0;
}

export function _ExpressionRunnerCreate(
  module: ModuleRef,
  flags: ExpressionRunnerFlags,
  maxDepth: Index,
  maxLoopIterations: Index
): ExpressionRunnerRef {
  return 0;
}
export function _ExpressionRunnerSetLocalValue(runner: ExpressionRunnerRef, index: Index, value: ExpressionRef): bool {
  return 0;
}
export function _ExpressionRunnerSetGlobalValue(
  runner: ExpressionRunnerRef,
  name: StringRef,
  value: ExpressionRef
): bool {
  return 0;
}
export function _ExpressionRunnerRunAndDispose(runner: ExpressionRunnerRef, expr: ExpressionRef): ExpressionRef {
  return 0;
}

export function _TypeBuilderCreate(size: Index): TypeBuilderRef {
  return 0;
}
export function _TypeBuilderGrow(builder: TypeBuilderRef, count: Index): void {
  return;
}
export function _TypeBuilderGetSize(builder: TypeBuilderRef): Index {
  return 0;
}
export function _TypeBuilderSetSignatureType(
  builder: TypeBuilderRef,
  index: Index,
  paramTypes: TypeRef,
  resultTypes: TypeRef
): void {
  return;
}
export function _TypeBuilderSetStructType(
  builder: TypeBuilderRef,
  index: Index,
  fieldTypes: ArrayRef<TypeRef>,
  fieldPackedTypes: ArrayRef<PackedType>,
  fieldMutables: ArrayRef<bool>,
  numFields: i32
): void {
  return;
}
export function _TypeBuilderSetArrayType(
  builder: TypeBuilderRef,
  index: Index,
  elementType: TypeRef,
  elementPackedTyype: PackedType,
  elementMutable: bool
): void {
  return;
}
export function _TypeBuilderGetTempHeapType(builder: TypeBuilderRef, index: Index): HeapTypeRef {
  return 0;
}
export function _TypeBuilderGetTempTupleType(
  builder: TypeBuilderRef,
  types: ArrayRef<TypeRef>,
  numTypes: Index
): TypeRef {
  return 0;
}
export function _TypeBuilderGetTempRefType(builder: TypeBuilderRef, heapType: HeapTypeRef, nullable: bool): TypeRef {
  return 0;
}
export function _TypeBuilderSetSubType(builder: TypeBuilderRef, index: Index, superType: HeapTypeRef): void {
  return;
}
export function _TypeBuilderSetOpen(builder: TypeBuilderRef, index: Index): void {
  return;
}
export function _TypeBuilderCreateRecGroup(builder: TypeBuilderRef, index: Index, length: Index): void {
  return;
}
export function _TypeBuilderBuildAndDispose(
  builder: TypeBuilderRef,
  heapTypes: ArrayRef<HeapTypeRef>,
  errorIndex: Pointer<Index>,
  errorReason: Pointer<TypeBuilderErrorReason>
): bool {
  return 0;
}
export function _BinaryenModuleSetTypeName(module: ModuleRef, heapType: HeapTypeRef, name: StringRef): void {
  return;
}
export function _BinaryenModuleSetFieldName(
  module: ModuleRef,
  heapType: HeapTypeRef,
  index: Index,
  name: StringRef
): void {
  return;
}

export function _BinaryenGetOptimizeLevel(): i32 {
  return 0;
}
export function _BinaryenSetOptimizeLevel(level: i32): void {
  return;
}
export function _BinaryenGetShrinkLevel(): i32 {
  return 0;
}
export function _BinaryenSetShrinkLevel(level: i32): void {
  return;
}
export function _BinaryenGetDebugInfo(): bool {
  return 0;
}
export function _BinaryenSetDebugInfo(on: bool): void {
  return;
}
export function _BinaryenGetTrapsNeverHappen(): bool {
  return 0;
}
export function _BinaryenSetTrapsNeverHappen(on: bool): void {
  return;
}
export function _BinaryenGetClosedWorld(): bool {
  return 0;
}
export function _BinaryenSetClosedWorld(on: bool): void {
  return;
}
export function _BinaryenGetLowMemoryUnused(): bool {
  return 0;
}
export function _BinaryenSetLowMemoryUnused(on: bool): void {
  return;
}
export function _BinaryenGetZeroFilledMemory(): bool {
  return 0;
}
export function _BinaryenSetZeroFilledMemory(on: bool): void {
  return;
}
export function _BinaryenGetFastMath(): bool {
  return 0;
}
export function _BinaryenSetFastMath(on: bool): void {
  return;
}
export function _BinaryenGetGenerateStackIR(): bool {
  return 0;
}
export function _BinaryenSetGenerateStackIR(on: bool): void {
  return;
}
export function _BinaryenGetOptimizeStackIR(): bool {
  return 0;
}
export function _BinaryenSetOptimizeStackIR(on: bool): void {
  return;
}
export function _BinaryenGetPassArgument(key: StringRef): StringRef {
  return 0;
}
export function _BinaryenSetPassArgument(key: StringRef, value: StringRef): void {
  return;
}
export function _BinaryenClearPassArguments(): void {
  return;
}
export function _BinaryenHasPassToSkip(pass: StringRef): bool {
  return 0;
}
export function _BinaryenAddPassToSkip(pass: StringRef): void {
  return;
}
export function _BinaryenClearPassesToSkip(): void {
  return;
}
export function _BinaryenGetAlwaysInlineMaxSize(): Index {
  return 0;
}
export function _BinaryenSetAlwaysInlineMaxSize(size: Index): void {
  return;
}
export function _BinaryenGetFlexibleInlineMaxSize(): Index {
  return 0;
}
export function _BinaryenSetFlexibleInlineMaxSize(size: Index): void {
  return;
}
export function _BinaryenGetOneCallerInlineMaxSize(): Index {
  return 0;
}
export function _BinaryenSetOneCallerInlineMaxSize(size: Index): void {
  return;
}
export function _BinaryenGetAllowInliningFunctionsWithLoops(): bool {
  return 0;
}
export function _BinaryenSetAllowInliningFunctionsWithLoops(enabled: bool): void {
  return;
}

// Helpers

export function _malloc(size: usize): usize {
  return 0;
}
export function _free(ptr: usize): void {
  return;
}
export function __i32_store8(ptr: usize, value: number): void {
  return;
}
export function __i32_store16(ptr: usize, value: number): void {
  return;
}
export function __i32_store(ptr: usize, value: number): void {
  return;
}
export function __f32_store(ptr: usize, value: number): void {
  return;
}
export function __f64_store(ptr: usize, value: number): void {
  return;
}
export function __i32_load8_s(ptr: usize): i8 {
  return 0;
}
export function __i32_load8_u(ptr: usize): u8 {
  return 0;
}
export function __i32_load16_s(ptr: usize): i16 {
  return 0;
}
export function __i32_load16_u(ptr: usize): u16 {
  return 0;
}
export function __i32_load(ptr: usize): i32 {
  return 0;
}
export function __f32_load(ptr: usize): f32 {
  return 0;
}
export function __f64_load(ptr: usize): f64 {
  return 0;
}
