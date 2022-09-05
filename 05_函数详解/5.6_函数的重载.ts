// type AddType = number | string
// function add(a: AddType, b: AddType) {
// 	return a + b // 会报错
// }

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: any, b: any): any {
	return a + b
}

console.log(add(2, 3)) // 5
console.log(add('type', 'script')) // typescript
// console.log(add('leslie', 24)) // 报错
