// 类型别名定义函数类型
type FnType = (a: number, b: number) => number
function handleNum(a: number, b: number, calcFn: FnType) {
	return calcFn(a, b)
}
const sum: FnType = (a, b) => a + b
handleNum(2, 3, sum)

// interface定义函数类型
interface ICalcFunc {
	(a: number, b: number): number
}
const add: ICalcFunc = (a, b) => a + b
const sub: ICalcFunc = (a, b) => a - b
