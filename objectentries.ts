import { Expect, Equal } from './utils'

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, T[P] extends undefined ? T[P] : Exclude<T[P], undefined>]
}[keyof T]

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type modelEntries = ObjectEntries<{ key?: undefined }> // ['name', string] | ['age', number] | ['locations', string[] | null];

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]

export {}
