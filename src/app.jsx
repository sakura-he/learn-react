import { default as React, useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Link, Routes, Route, Switch } from 'react-router-dom';
import Tab from './tab.jsx';
import useInterval from './hooks.js';
import { useRef } from 'react';
function getInit() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([
				{ name: '生活', path: '/1' },
				{ name: '科技', path: '/1' },
				{ name: '娱乐', path: '/2' },
			]);
		}, 1000);
	});
}
function App() {
	let [tabList, setTabList] = useState([]);
	let refTabList = useRef(); // ref不会重建,且current可以在重新渲染的时候更新
	refTabList.current = tabList;
	let timeout = () => {
		// 下面引用了tabList 造成闭包
		setTabList(
			refTabList.current.map((item) => ({
				name: item.name + 1,
				path: item.path,
			}))
		);
	};
	useEffect(() => {
		async function get() {
			let res = await getInit();
			// 触发函数组件重新渲染
			setTabList([...res]);
		}
		get();
		// 3秒后更新tabList
		setTimeout(timeout, 3000);
	}, []);
	return (
		<BrowserRouter>
			<div className="app">
				<Tab tabList={tabList}></Tab>
			</div>
			<Routes>
				<Route path="1" element={<span>1</span>}></Route>
				<Route path="2" element={<span>2</span>}></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
