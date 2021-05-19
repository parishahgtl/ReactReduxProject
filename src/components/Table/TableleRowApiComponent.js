import React, { Component } from 'react'

export default class TableleRowApiComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowData: []
        }
    }
    render() {
        const data = this.props.apiData1.map((data, index) => {
            return <tr key={index}>
                <td>{data.id}</td>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                <td>{data.completed.toString()}</td>
            </tr>;
        })
        return (
            <tbody>
                {data}
            </tbody>
        )
    }
}
