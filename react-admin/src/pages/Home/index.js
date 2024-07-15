import React, { Component } from 'react';
import { DatePicker } from 'antd';
import "./Home.css"

// 这里几个页面级组件的结构都一样,改类名就行
class Home extends Component {
    render () {
        return (
            <div className='M-home'>
                我是主页
                <DatePicker />
            </div>
        )
    }
}

export default Home