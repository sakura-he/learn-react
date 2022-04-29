import { useContext } from 'react'
import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { AppContext } from '../app2.jsx'

export default function (props) {
	let appContext = useContext(AppContext)
	console.log('child2 props', props)
	let [init, setInit] = useState(0)
	useEffect(
		function () {
			console.log(init)
		},
		[appContext.state.num]
	)
	return (
		<div>
			<h2>child2</h2>
			<div>age:{appContext.context.age}</div>
			<div>reducer.state {appContext.state.uid}</div>
			<button
				onClick={() => {
					setInit(1)
					appContext.dispatch({ type: 'saveUid', payload: 34534 })
				}}>
				app.jsx 的reduce.state -6 init{init}
			</button>
		</div>
	)
}
