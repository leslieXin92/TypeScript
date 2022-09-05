// 1、可选类型的参数必须写在后边，不能写成(a?:number, b:number)
function sum(a: number, b?: number) {}
sum(1)
sum(1, 2)

// 2、如果只有一个参数，并且为可选参数，则也可以传undefined
function test(a?: number) {}
test(1)
test(undefined)
