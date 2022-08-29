type Push<T extends unknown[], I> = [...T, I]

type Result = Push<[1, 2], '3'> // [1, 2, '3']

export {}
