import { Expect, Equal } from './utils'

// type IndexOf<T extends unknown[], I, C extends unknown[] = []> =
//   Equal<T[C['length']], I> extends true
//     ? C['length']
//     : C extends T
//       ? -1
//       : IndexOf<T, I, [...C, T[C['length']]]>

export type IndexOf<T extends unknown[], I, C extends 0[] = []> =
  T extends [infer First, ...infer Rest]
    ? Equal<First, I> extends true
      ? C['length']
      : IndexOf<Rest, I, [...C, 0]>
    : -1

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
]

export {}
