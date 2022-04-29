import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
export default function () {
	// 使用useState和useRef创建的变量在函数式组件重新渲染时会保存上一次的状态,而不是初始化
	// 改变useState创建的变量会引发函数式组件重新渲染,useRef的不会
	// useState可以作为依赖,使useEffect重载,useRef不会
	let [count, setCount] = useState(0)
	let [inputValue, setInputValue] = useState('')
	let [obj, setObj] = useState({
		name: 'xm',
		age: 12,
	})
	let a = 0
	useEffect(
		function () {
			console.log('依赖obj.name')
		},
		[obj.name]
	)
	useEffect(
		function () {
			console.log('依赖obj.age')
			console.log(a)
			console.log(divref.current.innerHTML)
		},
		[obj.age]
	)
	function modifyObj() {
		a = 1
		console.log(obj.age)
		setObj({
			name: 'xh',
			age: 17,
		})
	}
	let ref = useRef(1)
	let divref = useRef()
	function inputChange(evt) {
		console.log(evt)
		setInputValue(evt.target.value)
	}
	function countAdd() {
		console.log('旧count:', count)
		// setCount(count + 1);
		ref.current += 1
		console.log(ref.current)
	}
	useEffect(
		function () {
			console.log('aaa')
		},
		[ref.current]
	)
	return (
		<div>
			<h4>useState</h4>

			<input type="text" value={inputValue} onChange={inputChange} />
			<div>{count}</div>
			<button onClick={countAdd}>点击count++</button>
			<div>{ref.current}</div>
			<div ref={divref}>
				{obj.name},{obj.age}
			</div>
			<button onClick={modifyObj}>修改obj</button>
		</div>
	)
}
