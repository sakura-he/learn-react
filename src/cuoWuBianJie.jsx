import React, { Component, createContext, lazy, Suspense } from 'react';
import { TabContext } from './app.jsx'
// let { tabIndex } = TabContext();
class Content extends Component {
    // 使用static contextType = context对象来声明子组件使用的context
    render() {
        return (
            <div>context:{this.context.name}</div>
        )
    }
}
//  
let Lazy1 = lazy(() => import('./lazy1'));
let Lazy2 = lazy(() => import('./lazy2'));
let components = [Lazy1, Lazy2]
class SearchBar extends Component {
    inputValue = "";
    search(value, evt) {
        // input受控组件
        this.setState({
            inputValue: value
        })
    }
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('错误边界should')
        console.log(nextProps, nextState)
        return true
    }
    render() {
        console.log('错误边界页面render')
        return (
            <div className="container">
                <input type="text" onChange={(evt) => {
                    this.search(evt.target.value, evt);
                }} />
                {/* 提交按钮 */}
                <button className="btn" onClick={() => {
                    this.props.onClickTest('teeeererere')
                }}>提交</button>
              
            </div>
        )
    }
}
class Page extends Component {
    name = 'page';
    render() {
        return (
            <div className="container">
                <SearchBar onClickTest={(param1) => {
                    console.log('自定义onClickTest触发了');
                    console.log(this.name);
                }}></SearchBar>

            </div>

        )
    }
}
export default Page
