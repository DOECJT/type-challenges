import { Expect, Equal } from './utils'

type Zip<T extends unknown[], U extends unknown[], C extends unknown[] = []> =
  T extends [infer First, ...infer Rest]
    ? U extends [infer F, ...infer R]
      ? Zip<Rest, R, [...C, [First, F]]>
      : C
    : C

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

export {}
