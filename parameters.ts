const foo = (arg1: string, arg2: number): void => {}
type Foo = typeof foo

type MyParameters<F extends (...args: any) => any> = F extends (...args: infer Params) => any ? Params : never

type FunctionParamsType = MyParameters<Foo> // [arg1: string, arg2: number]

export {}
