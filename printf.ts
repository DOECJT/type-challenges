import { Expect, Equal } from './utils'

// type Curried<T extends unknown[]> =
//   T extends [infer First, ...infer Rest]
//     ? (arg: First) => Curried<Rest>
//     : string
// type A = Curried<[string, number]>

type LetterMap = {
  s: string,
  d: number
}
// type GetArray<T extends string, C extends unknown[] = []> =
//   T extends `${string}%${infer Letter}${infer Rest}`
//     // ? GetArray<Rest, Letter extends keyof LetterMap ? [...C, Letter] : [C]>
//     ? Letter extends keyof LetterMap
//       ? GetArray<Rest, [...C, LetterMap[Letter]]>
//       : GetArray<Rest, C>
//     : C
// type B = GetArray<'a%sbc'>

// type Format<T extends string> = Curried<GetArray<T>>
// type C = Curried<B>

type Format<T extends string> =
  T extends `${string}%${infer Letter}${infer Rest}`
    ? Letter extends keyof LetterMap
      ? (arg: LetterMap[Letter]) => Format<Rest>
      : Format<Rest>
    : string

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%%dbc'>, string>>,
  Expect<Equal<Format<'a%%%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>,
]

export {}
