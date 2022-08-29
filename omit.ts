interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<O, U> = {
  [P in keyof O as P extends U ? never : P]: O[P]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

export {}
