import { Expect, Equal } from './utils'

export type IsAny<T> = 0 extends (1 & T) ? true : false

type A = 0 extends unknown ? true : false
type B = IsAny<any>

type cases = [
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

export {}
