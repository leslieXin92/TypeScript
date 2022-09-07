interface ILength {
	length: number
}

function getLength<T extends ILength>(arg: T) {
	return arg.length
}

getLength('leslie')
getLength([1, 2, 3, 4, 5])
getLength({ length: 100 })
