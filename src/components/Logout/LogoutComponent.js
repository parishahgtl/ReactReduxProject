import React, { Component } from 'react'

export default class LogoutComponent extends Component {
    componentDidMount(){
        localStorage.removeItem('email');
        this.props.handleLogout()
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
