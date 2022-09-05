interface ISwim {
	swim: () => void
}

interface IRun {
	run: () => void
}

// 类实现接口
class Animal {}

// 继承：只能实现单继承
// 实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IRun {
	swim() {}
	run() {}
}

// 编写一些公共API：面向接口编程
function swimAction(swimAble: ISwim) {
	swimAble.swim()
}

swimAction(new Fish())
swimAction({ swim: () => {} })
