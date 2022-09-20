import { Expect, Equal } from './utils'

type N = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type MM = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'
type DD_28 = `0${N}` | `1${0 | N}` | `2${0 | Exclude<N, 9>}`
type DD_30 = DD_28 | '29' | '30'
type DD_31 = DD_30 | '31'

type ValidDate<T> =
  T extends `02${DD_28}` | `${'04' | '06' | '09' | '11'}${DD_30}` | `${'01' | '03' | '05' | '07' | '08' | '10' | '12'}${DD_31}`
    ? true
    : false

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]

export {}
