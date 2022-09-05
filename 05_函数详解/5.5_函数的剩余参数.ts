function sum(...numList: number[]) {
	return numList.reduce((pre, cur) => pre + cur, 0)
}

console.log(sum()) // 0
console.log(sum(2, 3)) // 5
console.log(sum(1, 2, 3, 4)) // 10
