// 类型参数化
// 定义函数时不定义参数类型，调用的时候以参数的形式定义类型

function getSelf<Type>(self: Type): Type {
	return self
}

// 1、调用方式一：明确传入类型
getSelf<number>(2)
getSelf<{ name: string }>({ name: 'leslie' })
getSelf<any[]>([1, '2', true])

// 2、调用方式二：类型推导
getSelf('leslie')
getSelf(24)
getSelf({ lover: 'cabbage' })
