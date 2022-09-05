class Student {
	static date: string = '2022.09.05'
	static action() {
		console.log('learn TypeScript')
	}
}

// 不用new一个实例，可以直接访问static的属性
console.log(Student.date) // '2022.09.05'
Student.action() // 'learn TypeScript'
