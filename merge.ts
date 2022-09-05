import { Expect, Equal } from './utils'

type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Merge<A, B> = {
  [P in (keyof A) | (keyof B)]: P extends keyof B ? B[P] : A[P & keyof A]
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}
type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]

export {}
