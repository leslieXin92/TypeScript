interface IPerson<T = string> {
	name: string
	age: number
	lover: T
}

const boy: IPerson<{ name: string }> = {
	name: 'leslie',
	age: 24,
	lover: {
		name: 'cabbage'
	}
}

const girl: IPerson = {
	name: 'cabbage',
	age: 23,
	lover: 'leslie'
}
