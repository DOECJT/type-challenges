import { Expect, Equal } from './utils'

type IsRequiredKey<T, U> = Pick<T, U & keyof T> extends Required<Pick<T, U & keyof T>> ? true : false

type A = { name?: string } extends { name: string } ? true : false

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>,
]

export {}
