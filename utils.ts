export type Flatten<O> = {
  [P in keyof O]: O[P]
}

export type Func = (...args: any[]) => any
