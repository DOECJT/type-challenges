type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer X> ? X : T

type Result = MyAwaited<ExampleType> // string

export {}
