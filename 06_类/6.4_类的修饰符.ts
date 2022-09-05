/**
 * public: 任何地方可见，公有的属性或方法（默认情况）
 * private: 同一类中可见，私有的属性或方法
 * protected: 仅在自身及子类中可见的属性或方法
 */

class Person {
	public name: string = ''
	private age: number = 24
	protected lover: string = 'cabbage'
	getAge() {
		return this.age
	}
}

class Boy extends Person {
	getBoyAge() {
		// return this.age // 报错
	}
	getLover() {
		return this.lover
	}
}

const p = new Person()
const leslie = new Boy()
p.name // ''
// p.age // 报错
// leslie.age // 报错
p.getAge() // 24
leslie.getAge() // 24
// p.lover // 报错
// leslie.lover // 报错
leslie.getLover() // cabbage
