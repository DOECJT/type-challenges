import { Expect, Equal } from './utils'

type GetRequired<T extends Record<PropertyKey, any>> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}

type A = { foo?: undefined }
type B = Required<A>
// when remove ? from key, remove undefined from value, so value is never

type X = GetRequired<{ foo: number; bar?: string }>
type Y = GetRequired<{ foo: undefined; bar?: undefined }>

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]

export {}
