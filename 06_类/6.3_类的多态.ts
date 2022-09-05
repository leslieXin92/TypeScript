class Animal {
	action() {
		console.log('animal - action')
	}
}

class Dog extends Animal {
	action() {
		console.log('dog - run')
	}
}

class Fish extends Animal {
	action() {
		console.log('fish - swim')
	}
}

// Animal: (Dog | Fish)
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animalList: Animal[]) {
	animalList.forEach(item => {
		item.action()
	})
}

const animals = [new Dog(), new Fish()]
makeActions(animals)
