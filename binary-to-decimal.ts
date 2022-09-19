import { Expect, Equal } from './utils'

type NumberMap = {
  '0': [],
  '1': [0]
}

type BinaryToDecimal<T, C extends 0[] = []> =
  T extends `${infer First}${infer Rest}`
    ? First extends keyof NumberMap
      ? BinaryToDecimal<Rest, [...C, ...C, ...NumberMap[First]]>
      : BinaryToDecimal<Rest, C>
    : C['length']

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]

export {}
