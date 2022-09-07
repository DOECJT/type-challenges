import { Expect, Equal } from './utils'

// type MinusOne<N extends number, C extends 0[] = []> =
//   N extends [...C, 0]['length']
//     ? C['length']
//     : MinusOne<N, [...C, 0]>

type DigitalMap = {
  '0': [],
  '1': [0],
  '2': [0, 0],
  '3': [0, 0, 0],
  '4': [0, 0, 0, 0],
  '5': [0, 0, 0, 0, 0],
  '6': [0, 0, 0, 0, 0, 0],
  '7': [0, 0, 0, 0, 0, 0, 0],
  '8': [0, 0, 0, 0, 0, 0, 0, 0],
  '9': [0, 0, 0, 0, 0, 0, 0, 0, 0],
}

type NumberToArray<T extends string, C extends 0[] = []> =
  T extends `${infer First}${infer Rest}`
    ? First extends keyof DigitalMap
      ? NumberToArray<Rest, [...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...DigitalMap[First]]>
      : never
    : C

type MinusOne<T extends number, A extends 0[] = NumberToArray<`${T}`>> =
  A extends [0, ...infer Rest]
    ? Rest['length']
    : never

type A = MinusOne<1101>

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]

export {}
