function getName() {
	return 'leslie'
}

function getAge() {
	return 24
}

const flag = Math.random() * 10 > 5

// unknown类型只能赋值给any和unknown类型，为了防止unknown类型的变量乱给别人赋值
let res: unknown

if (flag) {
	res = getName()
} else {
	res = getAge()
}

export {}
