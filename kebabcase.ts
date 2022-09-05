import { Expect, Equal } from './utils'

type UppercaseLetters =
  'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' |
  'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' |
  'O' | 'P' | 'Q' | 'R' | 'S' | 'T' |
  'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'

// type KebabCase<S extends string, C extends string = ''> =
//   S extends `${infer First}${infer Rest}`
//     ? First extends UppercaseLetters
//       ? C extends ''
//         ? KebabCase<Rest, Lowercase<First>>
//         : KebabCase<Rest, `${C}-${Lowercase<First>}`>
//       : KebabCase<Rest, `${C}${First}`>
//     : C

type KebabCase<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
      ? `${Lowercase<First>}${KebabCase<Rest>}`
      : `${Lowercase<First>}-${KebabCase<Rest>}`
    : S

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

export {}
