interface IPerson {
	name: string
	eat: () => void
}

interface IAnimal {
	run: () => void
}

interface IStudent extends IPerson, IAnimal {
	id: number
}

const student: IStudent = {
	id: 0,
	name: '',
	eat() {},
	run() {}
}

function running(runner: IAnimal) {
	runner.run()
}
