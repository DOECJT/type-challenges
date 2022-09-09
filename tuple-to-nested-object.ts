import { Expect, Equal } from './utils'

type TupleToNestedObject<Path,  V> =
  Path extends [infer First, ...infer Rest]
    ? First extends keyof any
      ? Record<First, TupleToNestedObject<Rest, V>>
      : TupleToNestedObject<Rest, V>
    : V

type A = TupleToNestedObject<[true, 'a'], string>

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]

export {}
