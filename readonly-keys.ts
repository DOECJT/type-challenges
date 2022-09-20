import { Expect, Equal } from './utils'

type GetReadonlyKeys<T> = keyof {
  [P in keyof T as Equal<Pick<T, P>, Readonly<Pick<T, P>>> extends true ? P : never]: T[P]
}

type A = { name: string }
type B = { readonly name: string }
type C = Equal<A, B>

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

export {}
