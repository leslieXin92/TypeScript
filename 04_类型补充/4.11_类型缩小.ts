// 方式一：typeof
type IDType = number | string
function printId(id: IDType) {
	if (typeof id === 'string') {
		console.log(id.toUpperCase())
	} else {
		console.log(id * 10)
	}
}

// 方式二：直接判断类型
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
	switch (direction) {
		case 'left':
			console.log('left')
			break
		case 'right':
			console.log('right')
			break
		case 'top':
			console.log('top')
			break
		case 'bottom':
			console.log('bottom')
	}
}

// 方式三：instanceof
type TimeType = string | Date
function printTime(time: TimeType) {
	if (time instanceof Date) {
		console.log(time.toUTCString())
	} else {
		console.log(time.toUpperCase())
	}
}

// 方式四：in
type Fish = {
	swimming: () => void
}
type Dog = {
	running: () => void
}
function walkWay(animal: Fish | Dog) {
	if ('swimming' in animal) {
		animal.swimming()
	} else {
		animal.running()
	}
}

export {}
