class A {
  a0: i32 = 0;
  a1: i32 = 0;
  a2: i32 = 0;
  a3: i32 = 0;
  a4: i32 = 0;
  a5: i32 = 0;
  a6: i32 = 0;
  a7: i32 = 0;
  a8: i32 = 0;
  a9: i32 = 0;
  a10: i32 = 0;
  a11: i32 = 0;
  a12: i32 = 0;
  a13: i32 = 0;
  a14: i32 = 0;
  a15: i32 = 0;
  a16: i32 = 0;
  a17: i32 = 0;
  a18: i32 = 0;
  a19: i32 = 0;
  a20: i32 = 0;
  a21: i32 = 0;
  a22: i32 = 0;
  a23: i32 = 0;
  a24: i32 = 0;
  a25: i32 = 0;
  a26: i32 = 0;
  a27: i32 = 0;
  a28: i32 = 0;
  a29: i32 = 0;
}

class ArrayA {
  a0: i32[] = [];
  a1: i32[] = [];
  a2: i32[] = [];
  a3: i32[] = [];
  a4: i32[] = [];
  a5: i32[] = [];
  a6: i32[] = [];
  a7: i32[] = [];
  a8: i32[] = [];
  a9: i32[] = [];
  a10: i32[] = [];
  a11: i32[] = [];
  a12: i32[] = [];
  a13: i32[] = [];
  a14: i32[] = [];
  a15: i32[] = [];
  a16: i32[] = [];
  a17: i32[] = [];
  a18: i32[] = [];
  a19: i32[] = [];
  a20: i32[] = [];
  a21: i32[] = [];
  a22: i32[] = [];
  a23: i32[] = [];
  a24: i32[] = [];
  a25: i32[] = [];
  a26: i32[] = [];
  a27: i32[] = [];
  a28: i32[] = [];
  a29: i32[] = [];
}

export const N: A[] = [];
const S = 4096;

export function init(): void {
  N.length = S;
  for (let i = 0; i < S; i++) {
    N[i] = new A();
  }
}

export function run(): ArrayA {
  const result = new ArrayA();
  result.a0 = N.map<i32>((item) => item.a0);
  result.a1 = N.map<i32>((item) => item.a1);
  result.a2 = N.map<i32>((item) => item.a2);
  result.a3 = N.map<i32>((item) => item.a3);
  result.a4 = N.map<i32>((item) => item.a4);
  result.a5 = N.map<i32>((item) => item.a5);
  result.a6 = N.map<i32>((item) => item.a6);
  result.a7 = N.map<i32>((item) => item.a7);
  result.a8 = N.map<i32>((item) => item.a8);
  result.a9 = N.map<i32>((item) => item.a9);
  result.a10 = N.map<i32>((item) => item.a10);
  result.a11 = N.map<i32>((item) => item.a11);
  result.a12 = N.map<i32>((item) => item.a12);
  result.a13 = N.map<i32>((item) => item.a13);
  result.a14 = N.map<i32>((item) => item.a14);
  result.a15 = N.map<i32>((item) => item.a15);
  result.a16 = N.map<i32>((item) => item.a16);
  result.a17 = N.map<i32>((item) => item.a17);
  result.a18 = N.map<i32>((item) => item.a18);
  result.a19 = N.map<i32>((item) => item.a19);
  result.a20 = N.map<i32>((item) => item.a20);
  result.a21 = N.map<i32>((item) => item.a21);
  result.a22 = N.map<i32>((item) => item.a22);
  result.a23 = N.map<i32>((item) => item.a23);
  result.a24 = N.map<i32>((item) => item.a24);
  result.a25 = N.map<i32>((item) => item.a25);
  result.a26 = N.map<i32>((item) => item.a26);
  result.a27 = N.map<i32>((item) => item.a27);
  result.a28 = N.map<i32>((item) => item.a28);
  result.a29 = N.map<i32>((item) => item.a29);
  return result;
}
