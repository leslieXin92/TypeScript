const imgEl = document.querySelector('img') as HTMLImageElement
imgEl.src = ''

const msg = 'hello world'
const num: number = msg as any as number // 不推荐这么搞

// 非空类型断言
function logMsgLen(msg?: string) {
	console.log(msg!.length)
}
