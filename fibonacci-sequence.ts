import { Expect, Equal, NumberToArray } from './utils'
import { MinusOne } from './minusone'

// The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
type Fibonacci<
  T extends number,
  CurrentIndex extends 0[] = [0],
  Prev extends 0[] = [],
  Current extends 0[] = [0]
> =
  CurrentIndex['length'] extends T
    ? Current['length']
    : Fibonacci<T, [...CurrentIndex, 0], Current, [...Prev, ...Current]>

type cases = [
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

export {}
