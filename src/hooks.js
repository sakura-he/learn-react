import { render } from '@testing-library/react'
import React, { useState, useEffect, useRef } from 'react'

function useInterval (callback, delay) {
	// 保存callback函数
	// 这个函数会在render中心渲染的时候重新执行
	const savedCallback = useRef()

	// 保存新回调
	savedCallback.current = callback

	// 建立 interval
	useEffect(() => {
		if (delay !== null) {
			let id = setInterval(() => {
				savedCallback.current()
			}, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}
// useState hook 实现
function context () {
	// 闭包保存state变量
	var state = undefined
	return function useStateHook (value) {
		state = state === undefined ? state : value
		return [
			state,
			function (value) {
				state = value
				// render();执行完成改变后就触发函数式组件更新
			},
		]
	}
}
export const useStateHook = context()
export default useInterval
