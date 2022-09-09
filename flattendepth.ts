import { Expect, Equal } from './utils'

// type Flatten<T extends unknown[]> =
//   T extends [infer First, ...infer Rest]
//     ? First extends unknown[]
//       ? [...First, ...Flatten<Rest>]
//       : [First, ...Flatten<Rest>]
//     : T
// type FlattenDepth<T extends unknown[], Times extends number = 1, C extends 0[] = []> =
//   C['length'] extends Times
//     ? T
//     : FlattenDepth<Flatten<T>, Times, [...C, 0]>

type FlattenDepth<T extends unknown[], Times extends number = 1, C extends 0[] = []> =
  T extends [infer First, ...infer Rest]
    ? C['length'] extends Times
      ? T
      : First extends unknown[]
        ? FlattenDepth<[...First, ...FlattenDepth<Rest>], Times, [...C, 0]>
        : [First, ...FlattenDepth<FlattenDepth<Rest>, Times, [...C, 0]>]
    : T

type A = FlattenDepth<[1, [2]], 1000000>

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]

export {}
