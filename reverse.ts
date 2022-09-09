import { Expect, Equal } from './utils'

// type Reverse<T extends unknown[], C extends unknown[] = []> =
//   T extends [infer First, ...infer Rest]
//     ? [...Reverse<Rest>, First]   
//     : C

export type Reverse<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
    ? [...Reverse<Rest>, First]
    : T

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

export {}
