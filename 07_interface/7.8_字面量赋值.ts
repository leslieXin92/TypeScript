interface IPerson {
	name: string
	age: number
	lover: string
}

const boy: IPerson = {
	name: 'leslie',
	age: 24,
	lover: 'cabbage'
	// msg: 'yahoo' // 报错，不能添加多余的属性
}

const girl = {
	name: 'cabbage',
	age: 23,
	lover: 'leslie',
	msg: 'yahoo'
}

// 类型检测时，有个freshness擦出的过程
// 把girl赋值给person时，只会检测interface定义的数据类型，其余会擦出
const person: IPerson = girl
