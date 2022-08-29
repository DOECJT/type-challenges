const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}
type Fn = typeof fn

type MyReturnType<F extends (...args: any) => any> = F extends (...args: any) => infer R ? R : never

type a = MyReturnType<Fn> // should be "1 | 2"

export {}
