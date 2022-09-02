import { Equal, Expect } from './utils'

type LengthOfString<S extends string, C extends number[] = []> =
  S extends `${string}${infer Rest}`
    ? LengthOfString<Rest, [...C, 0]>
    : C['length']

type a = LengthOfString<''> // 0
type b = LengthOfString<'kumiko'> // 6
type c = LengthOfString<'reina'> // 5
type d = LengthOfString<'Sound! Euphonium'> //16

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

export {}
