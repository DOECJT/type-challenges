type TrimLeft<T extends string> =
  T extends ` ${infer Rest}`
    ? TrimLeft<Rest>
    : T
type TrimRight<T extends string> =
  T extends `${infer Rest} `
    ? TrimRight<Rest>
    : T
type Trim<T extends string> = TrimRight<TrimLeft<T>>

type Trim2<T extends string> = T extends ` ${infer Rest}` | `${infer Rest} ` ? Trim2<Rest> : T

type trimmed = Trim2<'  Hello World  '> // expected to be 'Hello World'

export {}
