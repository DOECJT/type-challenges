import { Expect, Equal } from './utils'

// type Chunk<T extends unknown[], N extends number, I extends unknown[] = [], C extends unknown[] = []> =
//   T extends [infer First, ...infer Rest]
//     ? I['length'] extends N
//       ? Chunk<T, N, [], [...C, I]>
//       : Chunk<Rest, N, [...I, First], C>
//     : I extends []
//       ? C
//       : [...C, I]

type Chunk<T extends unknown[], N extends number, I extends unknown[] = []> =
  T extends [infer First, ...infer Rest]
    ? I['length'] extends N
      ? [I, ...Chunk<T, N>]
      : Chunk<Rest, N, [...I, First]>
    : I extends []
      ? []
      : [I]  

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]

export {}
