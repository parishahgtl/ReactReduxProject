import React, { Component } from 'react'
import {socket} from '../../index.js'

export default class Socket extends Component {
    componentDidMount(){
        socket.on('msg',data =>{

            console.log(data);
        })
    }
    render() {
        return (
            <div>
                <h2>Socket Demo in console</h2>
            </div>
        )
    }
}
