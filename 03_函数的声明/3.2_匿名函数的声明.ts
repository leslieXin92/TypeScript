// 普通函数要把参数写上类型
function handleMsg(msg: string) {}

const list = ['a', 'b', 'c', 'd', 'e']
// item可以不加类型
list.forEach(item => {
	console.log(item.length)
})

export {}
