import { Expect, Equal, Flatten } from './utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type Diff<A, B> = Flatten<Omit<A, keyof B> & Omit<B, keyof A>>

// type Diff<A, B> = Omit<A & B, keyof (A | B)>
// type A = Flatten<Foo & Bar>
// type B = keyof (Foo | Bar)

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

export {}
