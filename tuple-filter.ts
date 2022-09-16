import { Expect, Equal } from './utils'

type FilterOut<T extends unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? [First] extends [U]
    // ? First extends U
      ? FilterOut<Rest, U>
      : [First, ...FilterOut<Rest, U>]
    : T

// type A = FilterOut<[never], never>

type cases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
]

export {}
