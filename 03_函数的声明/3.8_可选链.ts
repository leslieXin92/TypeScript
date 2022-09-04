type Person = {
	name: string
	age: number
	friend?: {
		name: string
		age?: number
	}
}

const info: Person = {
	name: 'leslie',
	age: 24,
	friend: {
		name: 'cabbage'
	}
}

console.log(info.friend?.age)
