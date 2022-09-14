import { Expect, Equal, Func } from './utils'

type Curried<P extends unknown[], R> =
  P extends [infer First, ...infer Rest]
    ? (arg: First) => Curried<Rest, R>
    : R
declare function Currying<F>(fn: F):
  F extends (...args: infer P) => infer R
    ? Curried<P, R>
    : never

// declare function Currying<F>(fn: F): Curried<F>
// type Curried<F> =
//     F extends (...args: infer A) => infer R
//     ? A extends [infer First, ...infer Other]
//         ? (arg: First) => Curried<(...args: Other) => R>
//         : R
//     : never;

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]

export {}
