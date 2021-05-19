import React, { Component } from 'react'

export default class TableRowComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowData: props.data
        }
    }
    componentDidMount(){
        const obj = {
            id: 4,
            author: 'Arun Shourie',
            title: 'A Secular Agenda',
            readingStatus: false
        };
        this.setState({
            rowData: [...this.state.rowData, obj]
        });
    }
    render() {
        const data = this.state.rowData.map((data, index) => {
            return <tr key={index}>
                <td>{data.id}</td>
                <td>{data.author}</td>
                <td>{data.title}</td>
                <td>{data.readingStatus.toString()}</td>
            </tr>;
        });
        return (
            <tbody>
                {data}
            </tbody>
        )
    }
}
