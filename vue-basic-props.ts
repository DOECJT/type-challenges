import { Expect, Equal, Func } from './utils'
import { IsAny } from './is-any'
type Debug<T> = { [K in keyof T]: T[K] }
type Constructor = new (...args: any[]) => any

type GetReturnType<T> = {
  [P in keyof T]: T[P] extends Func ? ReturnType<T[P]> : T[P]
}
type GetPropList<U> = U extends U ? GetProp<U> : U
type GetProp<V> =
  V extends { type: infer X }
    ? X extends unknown[]
      ? GetPropList<X[number]>
      : GetProp<X>
    : V extends Func
      ? ReturnType<V>
      : V extends Constructor
        ? InstanceType<V>
        : any
type GetProps<T> = {
  [P in keyof T]: GetProp<T[P]>
}

declare function VueBasicProps<
  P,
  D,
  C,
  M
>(options: {
  props: P,
  data: (this: GetProps<P>) => D,
  computed: C & ThisType<GetProps<P> & D & GetReturnType<C> & M>,
  methods: M & ThisType<GetProps<P> & D & GetReturnType<C> & M>
}): GetProps<P> & D & GetReturnType<C> & M

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: { type: String },
    propC: { type: Boolean },
    propD: { type: ClassA },
    propE: { type: [String, Number] },
    propF: RegExp,
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type A = PropsType['propB']
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>,
    ]

    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const propE = this.propE
      type cases = [
        Expect<Equal<typeof fullname, string>>,
        Expect<Equal<typeof propE, string | number>>,
      ]
    },
  },
})

export {}
