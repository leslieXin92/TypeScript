class Point<T> {
	constructor(x: T, y: T, z: T) {
		this.x = x
		this.y = y
		this.z = z
	}
	x: T
	y: T
	z: T
}

const p1 = new Point('0,0,0', '1,1,1', '2,3,4')
const p2 = new Point<number>(1, 2, 3)
const p3: Point<string> = new Point('0,0,0', '1,1,1', '2,3,4')

const name1: string[] = ['leslie', 'cabbage']
const name2: Array<string> = ['leslie', 'cabbage'] // 不推荐（React jsx）
