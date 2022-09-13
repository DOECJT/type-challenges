import { Expect, Equal } from './utils'

type Subsequence<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
    ? Subsequence<Rest> | [First, ...Subsequence<Rest>]
    : T

type A = Subsequence<[1]>

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3] >>,
]

export {}
