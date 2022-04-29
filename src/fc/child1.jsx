import { useContext, useReducer, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { AppContext } from '../app2.jsx';

export default function (props) {
	let appContext = useContext(AppContext);
	let state = 0;
	// state
	useEffect(function () {
		console.log(state);
	}, []);
	// 第一弹:30/58
	// 2:19,70,88
	// 3:15,
	// 4:1,5
	// 5:3,33,30
	return (
		<div>
			<h2>child1</h2>
			<div>{appContext.context.name}</div>
			<div>appContext.state{appContext.state.uid}</div>
			<button
				onClick={() => {
					state = 1;
				}}>
				state = 1
			</button>
			<button
				onClick={() => {
					// 点击会调用context的dispatch函数
					appContext.dispatch({
						type: 'saveUid',
						payload: '7355608',
					});
				}}>
				触发app.js的reduce add +5
			</button>
		</div>
	);
}
