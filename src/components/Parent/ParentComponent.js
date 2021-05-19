import React, { Component } from 'react'
import ChildComponent from '../Child/ChildComponent';
import { Table } from 'react-bootstrap';
import { library, header } from '../../data/data';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theadData: header,
            rowData: library
        }
    }
    updateStateData=(data)=>{
        this.setState({rowData : data})
    }
    componentDidMount(){
      
    }
    render() {
        const data = this.state.theadData.map((data, index) => {
            return <th key={index}>{data}</th>;
        });
        const rowdata = this.state.rowData.map((data, index) => {
            return <tr key={index}>
                <td>{data.id}</td>
                <td>{data.author}</td>
                <td>{data.title}</td>
                <td>{data.readingStatus.toString()}</td>
            </tr>;
        });
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {data}
                        </tr>
                    </thead>
                    {rowdata}
                </Table>
                <ChildComponent updatedData={this.updateStateData} oldData={this.state.rowData}/>
            </div>
        )
    }
}
