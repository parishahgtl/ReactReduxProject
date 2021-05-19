import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { apiDataHeader } from '../../data/data';

export default class DashboardTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theadData: apiDataHeader,
            trowData: []
        }
    }
    getData() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos'
        })
            .then(response => {
                this.setState({ trowData: response.data })
            })
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        const data = this.state.theadData.map((data, index) => {
            return <th key={index}>{data}</th>;
        });
        const rowData = this.state.trowData.map((data, index) => {
            return <tr key={index}>
                <td>{data.id}</td>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                <td>{data.completed.toString()}</td>
            </tr>;
        })
        return (
            <div>
                <h4>User Data</h4><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>{data}</tr>
                    </thead>
                    {rowData}
                </Table>
            </div>
        )
    }
}
