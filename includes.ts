type Includes<T extends unknown[], I> =
  T extends [infer F, ...infer R]
    ? [I, F] extends [F, I] 
      ? true
      : false
    : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

export {}
