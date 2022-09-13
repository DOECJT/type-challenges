import { Expect, Equal } from './utils'

// type ConstructTuple<T extends number, C extends unknown[] = []> =
//   C['length'] extends T
//     ? C
//     : ConstructTuple<T, [...C, unknown]>

type NumberMap = {
  0: []
  1: [unknown]
  2: [unknown, unknown]
  3: [unknown, unknown, unknown]
  4: [unknown, unknown, unknown, unknown]
  5: [unknown, unknown, unknown, unknown, unknown]
  6: [unknown, unknown, unknown, unknown, unknown, unknown]
  7: [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  8: [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  9: [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
}
type B = NumberMap['1']
type C = '100' extends `${infer First extends number}${string}` ? First : never

type ConstructTuple<T extends number, S extends string = `${T}`, C extends unknown[] = []> =
  S extends `${infer First extends keyof NumberMap}${infer Rest}`
    ? ConstructTuple<T, Rest, [...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...C, ...NumberMap[First]]>
    : C
type A = never extends unknown ? true : false

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
]

export {}
