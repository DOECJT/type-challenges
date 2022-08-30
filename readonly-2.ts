import { Flatten } from './utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K extends keyof T = keyof T> = Flatten<
  Readonly<Pick<T, K>> & Omit<T, K>
>

type ReadonlyTodo = MyReadonly2<Todo, 'title' | 'description'>

const todo: ReadonlyTodo = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK

export {}
