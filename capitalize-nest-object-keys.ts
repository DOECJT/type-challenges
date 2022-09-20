import { Expect, Equal } from './utils'

type CapitalizeArray<T> =
  T extends [infer First, ...infer Rest]
    ? First extends Record<string, unknown>
      ? [CapitalizeNestObjectKeys<First>, ...CapitalizeArray<Rest>]
      : [First, ...CapitalizeArray<Rest>]
    : T
type CapitalizeNestObjectKeys<T> = {
  [P in keyof T as P extends string ? Capitalize<P> : P]:
    T[P] extends unknown[]
      ? CapitalizeArray<T[P]>
      : T[P] extends Record<string, unknown>
        ? CapitalizeNestObjectKeys<T[P]>
        : T[P]
}

type foo = {
  foo: string
  bars: [{ foo: string }]
}

type Foo = {
  Foo: string
  Bars: [{
    Foo: string
  }]
}

type A = CapitalizeNestObjectKeys<foo>

type cases = [
  Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>,
]

export {}
