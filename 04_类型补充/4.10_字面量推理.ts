type Methods = 'GET' | 'POST'

// function中的method需要Methods类型
function request(url: string, method: Methods) {}

// 此处method被推理成string类型
const options = {
	url: 'xxx',
	method: 'POST'
} as const

request(options.url, options.method as Methods)

export {}
