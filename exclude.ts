type MyExclude<U, T> = U extends T ? never : U

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

export {}
