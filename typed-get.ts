import { Expect, Equal } from './utils'

type Get<D, P> =
  P extends `${infer First}.${infer Rest}`
    ? Get<D[First & keyof D], Rest>
    : D[P & keyof D]

// type Get<D, P> =
//   P extends `${infer First}.${infer Rest}`
//     ? First extends keyof D
//       ? Get<D[First], Rest>
//       : never
//     : P extends keyof D
//       ? D[P]
//       : never

type A = Get<Data, 'hello'>

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar'
      count: 6
    }
    included: true
  }
  hello: 'world'
}

export {}
