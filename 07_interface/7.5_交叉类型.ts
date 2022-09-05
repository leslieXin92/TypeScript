interface IColorFul {
	color: string
}

interface IRun {
	run: () => void
}

type NewType = IColorFul & IRun

const obj: NewType = {
	color: 'aqua',
	run: () => {}
}
