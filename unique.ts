import { Expect, Equal } from './utils'
import { IndexOf } from './index-of'

type Unique<T extends unknown[], C extends unknown[] = []> =
  T extends [infer First, ...infer Rest]
    ? IndexOf<C, First> extends -1
      ? Unique<Rest, [...C, First]>
      : Unique<Rest, C>
    : C

// type Unique<T extends unknown[]> =
//   T extends [...infer Rest, infer Last]
//     ? IndexOf<Rest, Last> extends -1
//       ? [...Unique<Rest>, Last]
//       : Unique<Rest>
//     : T

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]

export {}
