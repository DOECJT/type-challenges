import { Flatten } from './utils'

type Chainable<C = {}> = {
  option: <K extends string, V>(key: K, value: V) => Chainable<Omit<C, K> & Record<K, V>>
  get(): C
}

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('foo', 'xixi')
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

type R = typeof result
type FlatR = Flatten<R>

type A = {
  name: 'a'
}
type B = {
  name: 'b'
}

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

export {}
