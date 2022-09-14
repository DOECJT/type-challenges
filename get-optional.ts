import { Expect, Equal } from './utils'

type GetOptional<T extends Record<PropertyKey, any>> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P]
}

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
]

export {}
