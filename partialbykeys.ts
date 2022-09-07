import { Expect, Equal, Flatten } from './utils'

type PartialByKeys<T, U extends keyof any = keyof T> =
  Omit<Omit<T, U> &
  {
    [P in keyof T as P extends U ? P : never]?: T[P]
  }, never>

// type PartialByKeys<T, U extends keyof any = keyof T> =
//   Omit<Omit<T, U> & Partial<Pick<T, U & keyof T>>, never>

interface User {
  name: string
  age: number
  address: string
}

// type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]

export {}
