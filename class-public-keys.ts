import { Expect, Equal } from './utils'

type ClassPublicKeys<T> = keyof T

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

type B = {
  [P in keyof A]: A[P]
}

type cases = [
  Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>,
]

export {}
