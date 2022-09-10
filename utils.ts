export type Flatten<O> = {
  [P in keyof O]: O[P]
}

export type Func = (...args: any[]) => any

// deffered conditional types
export type Equal<A, B> = (<T>() => T extends A ? 0 : 1) extends (<T>() => T extends B ? 0 : 1) ? true : false

export type NotEqual<A, B> = (<T>() => T extends A ? 0 : 1) extends (<T>() => T extends B ? 0 : 1) ? false : true

export type Expect<T extends true> = T

export type NumberToArray<T extends number, C extends 0[] = []> =
  C['length'] extends T
    ? C
    : NumberToArray<T, [...C, 0]>
