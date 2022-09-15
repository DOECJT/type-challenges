import { Expect, Equal } from './utils'

type LetterMap = {
  d: 'dec',
  f: 'float',
  h: 'hex',
  s: 'string'
}

// type ParsePrintFormat<T extends string, C extends (LetterMap[keyof LetterMap])[] = []> =
//   // any
//   T extends `${string}%${infer Rest}`
//     ? Rest extends `${infer RF}${infer RR}`
//       ? RF extends '%'
//         ? ParsePrintFormat<RR, C>
//         : RF extends keyof LetterMap
//           ? ParsePrintFormat<RR, [...C, LetterMap[RF]]>
//           : ParsePrintFormat<RR, C>
//       : C
//     : C

type ParsePrintFormat<T extends string> =
  T extends `${string}%${infer Letter}${infer Rest}`
    ? Letter extends keyof LetterMap
      ? [LetterMap[Letter], ...ParsePrintFormat<Rest>]
      : ParsePrintFormat<Rest>
    : []

type A = '%' extends `${string}%${string}` ? true : false

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
]

export {}
