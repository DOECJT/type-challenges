import { Expect, Equal, NumberToArray } from './utils'

type TwoSum<T extends number[], N extends number> =
  T extends [infer First extends number, ...infer Rest extends number[]]
    ? NumberToArray<N> extends [...NumberToArray<First>, ...infer R extends 0[]]
      ? R['length'] extends Rest[number]
        ? true
        : TwoSum<Rest, N>
      : false
    : false

type A = TwoSum<[3, 3], 6>

type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
]

export {}
