import { useReducer } from 'react'
export let state = {
	uid: '',
	nickName: '',
	token: '',
	avatar: ''
}
export function action (state, action) {
	let preState = Object.assign({}, state)
	if (action.type === "saveUid") {
		return {
			...state,
			uid: action.payload
		}
	}
	if (action.type === "savaNickName") {
		return {
			...state,
			uid: action.payload
		}
	}
	return {
		...state
	}
}

// shallowReactive和reactive
function reactive (target) {
	// handle处理器负责劫持
	const handle = {
		get (target, prop) {
			return Reflect.get(target, prop)
		},
		set (target, prop, value) {
			Reflect.set(target, prop, value)
		}
	}
	// 判断target是不是对象,传入的是基本类型target,直接返回
	if (target && target instanceof Object) {
		let proxy = new Proxy(target, handle)
		if (target instanceof Array) {
			// 遍历数组的每一项,看看子元素的每一项是不是数组或者是对象(用递归了),是的话将每一项设置代理后替换原来的
			target.forEach((item, index) => {
				// 获取每一项子元素设置代理后的结果
				let rtn = reactive(item)
				proxy[index] = rtn  // 替换
			})
		} else {
			let keys = Object.keys(target)  // 取出当前对象的所有键
			keys.forEach((item) => {
				let rtn = reactive(target[item])  // 对每个键进行检测
				proxy[item] = rtn
			})
		}
		// 返回替换好的对象或数组
		return proxy
	}
	// 直接返回
	return target
}
let array = [{ name: "xm", wife: { name: 'xh' } }, { name: "xw" }, "xl"]
let array2 = reactive(array)
console.dir(array2)