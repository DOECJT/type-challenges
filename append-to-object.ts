import { Equal, Expect, Flatten } from './utils'

type Test = { id: '1' }

type AppendToObject<O, K extends keyof any, V> = Flatten<{
  [P in keyof O]: O[P]
} & {
  [P in K]: V
}>

// type AppendToObject<O, K extends keyof any, V> = {
//   [P in keyof O | K]: P extends keyof O ? O[P] : V
// }

type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]

export {}
