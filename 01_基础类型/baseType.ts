// 布尔值
let isShow: boolean = true
isShow = false

// 数字
const number10: number = 5
const number16: number = 0xff
const number8: number = 0o11
const number2: number = 0b11

// 字符串
const myName: string = 'yahoo'
const school: string = 'SUSE'
const info1: string = `my name is ${myName}, I'm from ${school}`
const info2: string = 'my name is ' + myName + ", I'm from " + school

// 数组
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// 元组
let x: [string, number]
x = ['yahoo', 23]

// 枚举
enum color {
	red = 3,
	green,
	blue
}
const colorIndex: number = color.green
const colorName: string = color[colorIndex]

// unknown
let notSure1: unknown = 4
notSure1 = 'yahoo'
notSure1 = true

// any
let notSure2: any = 4
notSure2 = 'yahoo'
notSure2 = true
let list: any[] = ['yahoo', 23, true]
list[1] = '23'

// void
let unusable: void = undefined
function showMsg(): void {
	alert('yahoo')
}

// null & undefined
let n: null = null
let u: undefined = undefined

// never
function error(message: string): never {
	throw new Error(message)
}
function infiniteLoop(): never {
	while (true) {
		alert('yahoo')
	}
}

// object
function create(attr: object): void {
	console.log(attr)
}
create({ name: 'yahoo' })

// 类型断言
// 写法一：尖括号写法
const someType1: any = 'yahoo'
const someTypeLength1 = (<string>someType1).length
// 写法二：as写法
const someType2: any = 'yahoo'
const someTypeLength2 = (someType2 as string).length

// 类型大小写
function reverseStr(str: String): String {
	return str.split('').reverse().join('')
}
console.log(reverseStr('yahoo'))

function calcStrLength(str: string): number {
	return str.length
}
console.log(calcStrLength('yahoo'))
