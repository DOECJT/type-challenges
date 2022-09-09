import { Expect, Equal } from './utils'

// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[],
//   EC extends string = E extends [] ? '' : `__${E[number]}`,
//   MC extends string = M extends [] ? '' : `--${M[number]}`
// > =
//   `${B}${EC}${MC}`

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

export {}
