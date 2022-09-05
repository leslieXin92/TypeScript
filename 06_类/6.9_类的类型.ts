class Person {
	name: string = 'leslie'
}

const p: Person = {
	name: 'cabbage'
}

function printPerson(person: Person) {
	console.log(person)
}

printPerson(new Person())
printPerson({ name: 'cabbage' })
