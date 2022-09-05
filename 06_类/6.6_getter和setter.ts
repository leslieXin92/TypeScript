// 通过getter和setter 间接访问和修改私有属性
// tips：一般私有属性名前会加一个下划线 _

class Person {
	constructor(name: string) {
		this._name = name
	}
	private _name: string
	// setter
	set name(newName) {
		this._name = newName
	}
	// getter
	get name() {
		return this._name
	}
}

const p = new Person('leslie')
console.log(p.name) // leslie
p.name = 'cabbage'
console.log(p.name) // cabbage
