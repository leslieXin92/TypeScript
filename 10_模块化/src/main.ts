// 模块化
import { sum, sub } from './utils/math'

console.log(sum(3, 4)) // 3 + 4 = 7
console.log(sub(7, 3)) // 7 - 3 = 4

// 命名空间
import { time, age } from './utils/format'

console.log(time.format('cabbage')) // '2022-09-08'
console.log(age.format(23)) // 24
