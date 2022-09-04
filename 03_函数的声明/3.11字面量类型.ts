const name = 'leslie' // name为leslie类型

// 字面量类型的意义，就是必须结合联合类型
type Alignment = 'left' | 'center' | 'right'
let align: Alignment = 'left'
align = 'center'
align = 'right'

export {}
