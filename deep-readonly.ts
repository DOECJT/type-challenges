type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type DeepReadonly<O> = keyof O extends never
  ? O
  : { readonly [P in keyof O]: DeepReadonly<O[P]> }

type MyDeepReadonly<O> = {
  readonly [P in keyof O]: O[P] extends object ? MyDeepReadonly<O[P]> : O[P]
}
// 结果有一定差异, differance, 先平铺还是先判断
  
type Todo = DeepReadonly<X> // should be same as `Expected`

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

export {}
