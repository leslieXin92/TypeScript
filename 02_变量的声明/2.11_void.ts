const number = Math.random() * 10

function test(num: number): void {
	if (number > 5) return null // 非严格模式下可以返回null
	return undefined
}

test(number)
