function calcArea(shape: Shape) {
	return shape.getArea()
}

// 抽象类不能new实例
abstract class Shape {
	abstract getArea() // 抽象函数不能有函数体
}

class Rectangle extends Shape {
	constructor(width: number, height: number) {
		super()
		this.width = width
		this.height = height
	}
	private width: number = 0
	private height: number = 0
	// 抽象类的方法必须由子类实现
	getArea() {
		return this.width * this.height
	}
}

class Circle extends Shape {
	constructor(radius: number) {
		super()
		this.radius = radius
	}
	private radius: number = 0
	// 抽象类的方法必须由子类实现
	getArea() {
		return this.radius * this.radius * Math.PI
	}
}

const rectangle = new Rectangle(4, 5)
const circle = new Circle(2)

console.log(calcArea(rectangle))
console.log(calcArea(circle))
// console.log(new Shape()) // 使用抽象类就是为了解决这种情况
