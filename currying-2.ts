import { Expect, Equal } from './utils'

type GetArray<T> =
  T extends [...infer Rest, infer Last]
    ? T | GetArray<Rest>
    : never
type A = GetArray<[1, 2, 3]>

type Curried<T, R, C extends unknown[] =[]> =
  T extends [infer First, ...infer Rest]
    ? Rest extends []
      ? (...args: [...C, First]) => R
      : ((...args: [...C, First]) => Curried<Rest, R>) & Curried<Rest, R, [...C, First]>
    // ? (...args: T) => Curried<C, R, C> & Curried<Rest, R, [...C, First]>
    : () => R
type B = Curried<[string, number, boolean], boolean>

// type Curry<A, R, D extends unknown[] = []> =
//     A extends [infer H, ...infer T]
//       ? T extends []
//         ? (...args: [...D, H]) => R
//         : ((...args: [...D, H]) => Curry<T, R>) & Curry<T, R, [...D, H]>
//       : () => R
// type C = Curry<[1, 2, 3], 'xixi'>

declare function DynamicParamsCurrying<T extends unknown[], R>(fn: (...args: T) => R): Curried<T, R>

const curried1 = DynamicParamsCurrying((a: string, b: number, c: boolean) => true)
const curried2 = DynamicParamsCurrying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

const curried1Return1 = curried1('123')(123)(true)
const curried1Return2 = curried1('123', 123)(false)
const curried1Return3 = curried1('123', 123, true)
const curried1Return4 = curried1('123')(123, true)

const curried2Return1 = curried2('123')(123)(true)(false)(true)('123')(false)
const curried2Return2 = curried2('123', 123)(true, false)(true, '123')(false)
const curried2Return3 = curried2('123', 123)(true)(false)(true, '123', false)
const curried2Return4 = curried2('123', 123, true)(false, true, '123')(false)
const curried2Return5 = curried2('123', 123, true)(false)(true)('123')(false)
const curried2Return6 = curried2('123', 123, true, false)(true, '123', false)
const curried2Return7 = curried2('123', 123, true, false, true)('123', false)
const curried2Return8 = curried2('123', 123, true, false, true)('123')(false)
const curried2Return9 = curried2('123', 123, true, false, true, '123')(false)
const curried2Return10 = curried2('123', 123, true, false, true, '123', false)

type cases = [
  Expect<Equal< typeof curried1Return1, boolean>>,
  Expect<Equal< typeof curried1Return2, boolean>>,
  Expect<Equal< typeof curried1Return3, boolean>>,

  Expect<Equal< typeof curried2Return1, boolean>>,
  Expect<Equal< typeof curried2Return2, boolean>>,
  Expect<Equal< typeof curried2Return3, boolean>>,
  Expect<Equal< typeof curried2Return4, boolean>>,
  Expect<Equal< typeof curried2Return5, boolean>>,
  Expect<Equal< typeof curried2Return6, boolean>>,
  Expect<Equal< typeof curried2Return7, boolean>>,
  Expect<Equal< typeof curried2Return8, boolean>>,
  Expect<Equal< typeof curried2Return9, boolean>>,
  Expect<Equal< typeof curried2Return10, boolean>>,
]

export {}
