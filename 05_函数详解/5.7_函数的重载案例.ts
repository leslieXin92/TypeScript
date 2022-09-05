// 联合类型来实现
function getLength(args: string | any[]) {
	return args.length
}
console.log(getLength('leslie')) // 6
console.log(getLength([1, 2, 3, 4, 5])) // 5

// 函数的重载来实现
function getLen(args: string): number
function getLen(args: any[]): number
function getLen(args: any): number {
	return args.length
}
console.log(getLen('leslie')) // 6
console.log(getLen([1, 2, 3, 4, 5])) // 5
