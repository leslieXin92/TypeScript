function logInfo(info: string | number) {
	switch (typeof info) {
		case 'string':
			console.log(info.toUpperCase())
			break
		case 'number':
			console.log(info * 10)
			break
	}
}

logInfo('leslie')
logInfo(24)

export {}
