// 方式一：
class Student1 {
	name: string = ''
	age: number = 0
	id: number = 0
	study() {
		console.log(`this.name - study`)
	}
}

class Teacher1 {
	name: string = ''
	age: number = 0
	study() {
		console.log(`this.name - study`)
	}
	teach() {
		console.log(`this.name - teach`)
	}
}

// 方式二：
class Person2 {
	name: string = ''
	age: number = 0
	id: number = 0
	study() {
		console.log(`this.name - study`)
	}
}

class Student2 extends Person2 {}

class Teacher2 extends Person2 {
	teach() {
		console.log(`this.name - teach`)
	}
}

// super
class Person3 {
	constructor(name: string, age: number, id?: number) {
		this.name = name
		this.age = age
		if (id !== undefined) this.id = id
	}
	name: string
	age: number
	id: number = 1
	study() {
		console.log(`${this.name} - study`)
	}
}

class Student3 extends Person3 {}

class Teacher3 extends Person3 {
	constructor(name: string, age: number, id?: number, salary?: number) {
		super(name, age, id) // 调用Person3的constructor
		if (salary !== undefined) this.salary = salary
	}
	salary: number = 0
	teach() {
		console.log(`${this.name} - teach`)
	}
	// overWriter
	study() {
		super.study() // 执行父类的study方法
		console.log(`${this.name} - teacher - study`)
	}
}

const student = new Student3('student', 0, 0)
const teacher = new Teacher3('teacher', 18, 0, 0)

export {}
