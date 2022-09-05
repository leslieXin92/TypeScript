class Person {
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
	name: string
	age: number
	eating() {
		console.log(`${this.name} - eating`)
	}
}

const p = new Person('leslie', 24)
console.log(p) // { name: 'leslie', age: 24 }
p.eating() // leslie - eating

export {}
