import { Expect, Equal, NumberToArray } from './utils'

type AddNum<T extends number, U extends number> = [...NumberToArray<T>, ...NumberToArray<U>]['length']

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  U extends unknown[] = [],
> = T extends [infer First, ...infer Rest]
  ? Start extends End 
    ? [...U, ...T]
    : U['length'] extends Start
      ? Fill<Rest, N, AddNum<Start, 1> & number, End, [...U, N]>
      : Fill<Rest, N, Start, End, [...U, First]>
  : U

type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]

export {}
