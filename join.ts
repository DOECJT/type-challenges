import { Expect, Equal } from './utils'

type StringContent = number | string
type Join<T extends unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? Rest['length'] extends 0
      ? First
      : `${First & StringContent}${U & StringContent}${Join<Rest,U>}`
    : never

type A = Join<['2', '2', '2'], 1>

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]

export {}
