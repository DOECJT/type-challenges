interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type LookUp<U, T> = U extends { type: T } ? U : never

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

export {}
