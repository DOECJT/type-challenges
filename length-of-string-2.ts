import { IsTrue, Equal } from './utils'

// type LengthOfString<T extends string, C extends 0[] = []> =
//   T extends `${infer First}${infer Rest}`
//     ? LengthOfString<Rest, [...C, 0]>
//     : C['length']

type LengthOfString<T extends string, C extends number[] = []> =
  T extends `${infer S0}${infer S1}${infer S2}${infer S3}${infer S4}${infer S5}${infer S6}${infer S7}${infer S8}${infer S9}${infer Rest}`
    ? LengthOfString<Rest, [...C, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>
    : T extends `${infer F}${infer R}`
      ? LengthOfString<R, [...C, 0]>
      : C['length']

type cases = [
  IsTrue<Equal<LengthOfString<''>, 0>>,
  IsTrue<Equal<LengthOfString<'1'>, 1>>,
  IsTrue<Equal<LengthOfString<'12'>, 2>>,
  IsTrue<Equal<LengthOfString<'123'>, 3>>,
  IsTrue<Equal<LengthOfString<'1234'>, 4>>,
  IsTrue<Equal<LengthOfString<'12345'>, 5>>,
  IsTrue<Equal<LengthOfString<'123456'>, 6>>,
  IsTrue<Equal<LengthOfString<'1234567'>, 7>>,
  IsTrue<Equal<LengthOfString<'12345678'>, 8>>,
  IsTrue<Equal<LengthOfString<'123456789'>, 9>>,
  IsTrue<Equal<LengthOfString<'1234567890'>, 10>>,
  IsTrue<Equal<LengthOfString<'12345678901'>, 11>>,
  IsTrue<Equal<LengthOfString<'123456789012'>, 12>>,
  IsTrue<Equal<LengthOfString<'1234567890123'>, 13>>,
  IsTrue<Equal<LengthOfString<'12345678901234'>, 14>>,
  IsTrue<Equal<LengthOfString<'123456789012345'>, 15>>,
  IsTrue<Equal<LengthOfString<'1234567890123456'>, 16>>,
  IsTrue<Equal<LengthOfString<'12345678901234567'>, 17>>,
  IsTrue<Equal<LengthOfString<'123456789012345678'>, 18>>,
  IsTrue<Equal<LengthOfString<'1234567890123456789'>, 19>>,
  IsTrue<Equal<LengthOfString<'12345678901234567890'>, 20>>,
  IsTrue<Equal<LengthOfString<'123456789012345678901'>, 21>>,
  IsTrue<Equal<LengthOfString<'1234567890123456789012'>, 22>>,
  IsTrue<Equal<LengthOfString<'12345678901234567890123'>, 23>>,
  IsTrue<Equal<LengthOfString<'aaaaaaaaaaaaggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>, 272>>,
]

export {}
