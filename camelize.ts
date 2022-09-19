import { Expect, Equal } from './utils'

type Camel<S> =
  S extends `${infer First}_${infer Rest}`
    ? `${First}${Camel<Capitalize<Rest>>}`
    : S
type A = Camel<'a_b'>

type Camelize<T> =
  T extends object
    ? {
      [P in keyof T as Camel<P>]: T[P] extends unknown[] ? CamelizeArray<T[P]> : Camelize<T[P]>
    }
    : T
type CamelizeArray<T> =
  T extends [infer First, ...infer Rest]
    ? First extends object
      ? [Camelize<First>, ...CamelizeArray<Rest>]
      : [First, ...CamelizeArray<Rest>]
    : T
type B = Camelize<{
  some_prop: string
  prop: { another_prop: string }
  array: [
    { snake_case: string },
    { another_element: { yet_another_prop: string } },
    { yet_another_element: string },
  ]
}>

type cases = [
  Expect<Equal<
    Camelize<{
      some_prop: string
      prop: { another_prop: string }
      array: [
        { snake_case: string },
        { another_element: { yet_another_prop: string } },
        { yet_another_element: string },
      ]
    }>,
    {
      someProp: string
      prop: { anotherProp: string }
      array: [
        { snakeCase: string },
        { anotherElement: { yetAnotherProp: string } },
        { yetAnotherElement: string },
      ]
    }
  >>,
]

export {}
