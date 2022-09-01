import { Func } from './utils'

type Fn = (a: number, b: string) => number

type AppendArgument<F extends Func, A> =
  F extends (...args: infer Args) => infer R
    ? (...args: [...Args, A]) => R
    : never

type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number

export {}
