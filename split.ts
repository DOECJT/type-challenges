import { Expect, Equal } from './utils'

type Split<S extends string, U extends string> =
  string extends S
    ? string[]
    : S extends `${infer First}${U}${infer Rest}`
      ? [First, ...Split<Rest, U>]
      : U extends S
        ? []
        : [S]
type A = Split<'Hi! How are you?', ''>

type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]

export {}
