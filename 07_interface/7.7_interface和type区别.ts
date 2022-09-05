// interface可以定义多个相同名称的类型（最终会合并）
interface IFoo {
	name: string
}
interface IFoo {
	age: number
}
const foo: IFoo = {
	name: 'leslie',
	age: 24
}
