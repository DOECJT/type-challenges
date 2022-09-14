import { Expect, Equal } from './utils'

type UnionToIntersection<U, F = U extends U ? (arg: U) => void : never> =
  [F] extends [(arg: infer I) => void]
    ? I
    : never

type A = UnionToIntersection<'foo' | 42 | true>
type B = UnionToIntersection<(() => 'foo') | ((i: 42) => true)>

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
]

export {}
