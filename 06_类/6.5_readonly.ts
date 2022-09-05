// readonly可以在构造器中赋值，赋值之后不可修改
// readonly属性本身不能修改，但是如果该属性是引用类型，引用类型中的属性可以修改

class Person {
	constructor(name: string, friend?: Person) {
		this.name = name
		if (this.friend !== undefined) this.friend = friend
	}
	readonly name: string
	readonly friend?: Person
	age?: number = 0
}

const p = new Person('leslie', new Person('cabbage'))
p.name // leslie
// p.name = 'aaa' // 报错
// p.friend = new Person('aaa') // 报错
if (p.friend) p.friend.age = 22 // 22
