import { Expect, Equal } from './utils'

// type DropChar<S extends string, C extends string> =
//   S extends `${infer First}${infer Rest}`
//     ? First extends C
//       ? DropChar<Rest, C>
//       : `${First}${DropChar<Rest, C>}`
//     : S

type DropChar<S extends string, C extends string> =
  S extends `${infer L}${C}${infer R}`
    // ? L
    ? `${L}${DropChar<R, C>}`
    : S

// type DropChar<S, C extends string> = S extends `${infer First}${C}${infer Rest}` ? `${First}${DropChar<Rest, C>}` : S

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
type A = DropChar<'butter fly!', ''>

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]

export {}
