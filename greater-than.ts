import { Expect, Equal } from './utils'

type GreaterThan<A, B, C extends 0[] = []> =
  C['length'] extends A
    ? C['length'] extends B
      ? false
      : false
    : C['length'] extends B
      ? true
      : GreaterThan<A, B, [...C, 0]>

// type NumberToArray<T extends number, C extends 0[] = []> =
//   C['length'] extends T
//     ? C
//     : NumberToArray<T, [...C, 0]>
// type GreaterThan<A extends number, B extends number> =
//   NumberToArray<B> extends [...NumberToArray<A>, ...infer Rest]
//     ? false
//     : true

type A = GreaterThan<2, 1> //should be true
type B = GreaterThan<1, 1> //should be false
type C = GreaterThan<10, 100> //should be false
type D = GreaterThan<111, 11> //should be true

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]

export {}
