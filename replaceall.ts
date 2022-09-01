type ReplaceAll<S extends string, From extends string, To extends string> =
  S extends `${infer Left}${From}${infer Right}`
    ? ReplaceAll<`${Left}${To}${Right}`, From, To>
    : S

type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

export {}
