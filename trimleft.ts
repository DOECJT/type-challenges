type TrimLeft<T extends string> =
  T extends ` ${infer Rest}`
    ? TrimLeft<Rest>
    : T

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

export {}
