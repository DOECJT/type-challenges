type Replace<S extends string, From extends string, To extends string> =
  S extends `${infer Left}${From}${infer Right}`
    ? Replace<`${Left}${To}${Right}`, From, To>
    : S

type replaced = Replace<'types are fun fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

export {}
