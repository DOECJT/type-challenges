const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

type GetPromiseValue<T> = T extends Promise<infer X> ? X : T
type GetPromiseValueOfArray<T extends unknown[]> =
  T extends [infer First, ...infer Rest]
    ? [GetPromiseValue<First>, ...GetPromiseValueOfArray<Rest>]
    : []

declare function PromiseAll<T extends unknown[]>(arr: readonly [...T]): Promise<GetPromiseValueOfArray<T>>

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)

export {}
