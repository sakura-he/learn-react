import { useState } from 'react'
import Child1 from './fc/child1.jsx'
import Child2 from './fc/child2.jsx'
import { createContext, useReducer } from 'react'
import * as vuex from './store/index.js'
export let AppContext = createContext()

export default function () {
	const [state, dispatch] = useReducer(vuex.action, vuex.state)
	let state1 = useState('state1')
	let state2 = useState('state2')
	let [context, setContext] = useState({ name: 'xm', age: 12 })
	return (
		<AppContext.Provider value={{ state, context, dispatch }}>
			<div className="component">
				<h1>app.js</h1>
				<Child1 props1={state1}></Child1>
				<Child2 props2={state2}></Child2>
				<button
					onClick={() => {
						setContext({
							name: 'xm',
							age: 13,
						})
					}}>
					更改Context
				</button>
			</div>
		</AppContext.Provider>
	)
}
