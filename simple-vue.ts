import { Expect, Equal, Func } from './utils'

type GetReturnType<T> = {
  [P in keyof T]: T[P] extends Func ? ReturnType<T[P]> : T[P]
}

declare function SimpleVue<
  D,
  C,
  M
>(options: {
  data: (this: {}) => D,
  computed: C & ThisType<D & GetReturnType<C> & M>,
  methods: M & ThisType<D & GetReturnType<C> & M>
}): D & GetReturnType<C> & M

const v = SimpleVue({
  data() {
    return {
      firstName: 'jack',
      lastName: 'johns'
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    printName() {
      console.log(this.fullName)
    }
  }
})

SimpleVue({
  data() {
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
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    },
  },
})

export {}
