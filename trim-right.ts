import { Expect, Equal } from './utils'

type Space = ' ' | '\n' | '\t'
type TrimRight<T extends string> =
  T extends `${infer Rest}${Space}`
    ? TrimRight<Rest>
    : T

type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]

export {}
