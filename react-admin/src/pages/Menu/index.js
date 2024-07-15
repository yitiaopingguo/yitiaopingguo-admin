import React, { Component } from 'react';
import Table from "../../components/Table"
import "./Menu.scss"

// 这里几个页面级组件的结构都一样,改类名就行
class Menu extends Component {
    render () {
        return (
            <div className='M-table'>
                <Table></Table>
            </div>
        )
    }
}

export default Menu