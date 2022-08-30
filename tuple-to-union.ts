type Arr = ['1', '2', '3']

type TupleToUnion<T extends unknown[]> = T[number]

type TupleToUnion2<T> = T extends Array<infer X> ? X : never

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

export {}
