// 元组类型

const info: [string, number, boolean] = ['leslie', 24, true]

function useState<T>(state: T) {
	let curState = state
	const changeState = (newState: T) => {
		curState = newState
	}
	const tuple: [T, (newState: T) => void] = [curState, changeState]
	return tuple
}

const [counter, setCounter] = useState(0)
const [msg, setMsg] = useState('hello world')
const [flag, setFlag] = useState(true)
