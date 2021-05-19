import React, { Component } from 'react'
import Sidebar from '../Other/SideBar';

export default class DashboardComponent extends Component {
    render() {
        return (
            <div>
                <Sidebar handleLogout={this.props.handleLogout}></Sidebar>
            </div>
        )
    }
}
