// 1、函数作为参数时，在参数中如何编写类型
function a() {}

type AType = () => void
function b(fn: AType) {
	fn()
}

b(a)

// 2、定义常量时，编写函数的类型
type sumFnType = (a: number, b: number) => void
const sum: sumFnType = (a: number, b: number) => {
	return a + b
}
