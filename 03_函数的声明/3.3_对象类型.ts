function test(info: { name: string; age: number }) {
	console.log(info.name.length)
	console.log(info.age.toString())
}

test({ name: 'leslie', age: 24 })
