import { Expect, Equal } from './utils'

type DigitalMap = {
  0: [],
  1: [any],
  2: [any, any],
  3: [any, any, any],
  4: [any, any, any, any],
  5: [any, any, any, any, any],
  6: [any, any, any, any, any, any],
  7: [any, any, any, any, any, any, any],
  8: [any, any, any, any, any, any, any, any],
  9: [any, any, any, any, any, any, any, any, any],
}
type DMap = {
  [P in keyof DigitalMap as `${P}`]: DigitalMap[P]
}

type K = `${keyof DigitalMap}`

type ToNumber<T extends string, C extends 0[] = []> =
  T extends `${infer First}${infer Rest}`
    ? First extends keyof DMap
      ? ToNumber<Rest, [...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...DMap[First]]>
      : never
    : C['length']

type A = ToNumber<'0'>

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]

export {}
