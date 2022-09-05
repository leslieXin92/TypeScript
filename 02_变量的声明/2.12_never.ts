function test(): never {
	while (true) {}
}

function throwError(): never {
	throw new Error()
}

// check永远不会被赋值为msg。
// 如果msg再增加一个boolean类型，但是又没有对boolean类型的msg处理的代码，会直接编译时报错
function handleMsg(msg: string | number) {
	switch (typeof msg) {
		case 'string':
			console.log('msg为string类型')
			break
		case 'number':
			console.log('msg为number类型')
			break
		default:
			const check: never = msg
	}
}

export {}
