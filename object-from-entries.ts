import { Expect, Equal } from './utils'

type ObjectFromEntries<U extends [string, any]> = {
  [P in U[0]]: U extends [infer Key, infer Value]
    ? Key extends P
      ? Value
      : never
    : never
}

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type A = ObjectFromEntries<ModelEntries>

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]

export {}
