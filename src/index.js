import React from 'react'
import ReactDom from 'react-dom'

import App from './app.jsx'
import './style.css'
let root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App></App>)
// let creactRoot = ReactDom.createRoot(document.getElementById('root'));
// creactRoot.render(<App></App>)
// ReactDom.render(<App
// ></App>, document.getElementById('root'));