import { Expect, Equal } from './utils'

type Shift<T extends any[]> =
  T extends [infer First, ...infer Rest]
    ? Rest
    : T

type Result = Shift<[3, 2, 1]> // [2, 1]

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]

export {}
