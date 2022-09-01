type Permutation<U, C = U> =
  [U] extends [never]
    ? []
    : U extends U
      ? [U, ...Permutation<Exclude<C, U>>]
      : never

type perm = Permutation<'A' | 'B' | 'C'>
// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

export {}
