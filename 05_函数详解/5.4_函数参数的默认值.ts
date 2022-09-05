function fnA(a: number = 10) {
	console.log(a)
}
fnA(1) // 1
fnA() // 10

// 如果第一个参数有默认值，则必须传第一个值，可以传undefined
function fnB(a: number = 10, b: number) {
	console.log(a, b)
}
fnB(undefined, 1) // 10 1
