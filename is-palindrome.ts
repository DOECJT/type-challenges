import { Expect, Equal } from './utils'

type IsPalindrome<U extends string | number, T = `${U}`> =
  T extends `${infer S}${infer R}`
    // ? R
    ? R extends ''
      ? true
      : T extends `${S}${infer C}${S}`
        ? IsPalindrome<C>
        : false
    : true

type A = IsPalindrome<'abc'>

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]

export {}
