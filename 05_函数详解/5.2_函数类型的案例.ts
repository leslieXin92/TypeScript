function handleNum(
	a: number,
	b: number,
	fn: (num1: number, num2: number) => number
) {
	return fn(a, b)
}

handleNum(2, 3, (a, b) => a + b) // 5
handleNum(2, 3, (a, b) => a * b) // 6
