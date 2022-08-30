export type Flatten<O> = {
  [P in keyof O]: O[P]
}
