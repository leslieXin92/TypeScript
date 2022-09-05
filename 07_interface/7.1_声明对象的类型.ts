// 类型别名声明方式
type BoyType = {
	readonly name: string
	age: number
	friend?: string[]
}
const boy: BoyType = {
	name: 'leslie',
	age: 24
}

// interface声明方式
interface IGirlType {
	readonly name: string
	age: number
	friend?: string[]
}
const girl: IGirlType = {
	name: 'cabbage',
	age: 23
}
