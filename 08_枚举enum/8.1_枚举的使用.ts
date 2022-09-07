enum Direction {
	LEFT, // 默认为number 0，下边递增，可 = 100 或 = ‘leslie’ 等赋默认值
	RIGHT,
	TOP,
	BOTTOM
}

function turnDirection(direction: Direction) {
	switch (direction) {
		case Direction.LEFT:
			console.log('left')
			break
		case Direction.RIGHT:
			console.log('right')
			break
		case Direction.TOP:
			console.log('top')
			break
		case Direction.BOTTOM:
			console.log('bottom')
			break
	}
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)
