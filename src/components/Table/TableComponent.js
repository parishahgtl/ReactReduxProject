import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import TableHeader from './TableHeaderComponent';
import TableRow from './TableRowComponent';
import TableApiRow from './TableleRowApiComponent';
 
export default class TableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }    
    render() {
        return (
            <div><br />
                <h4>Prop Array Demo</h4><br />
                <Table striped bordered hover>
                    <TableHeader headerData={this.props.headerData} />
                    <TableRow data={this.props.propData} />
                </Table><br />
                <h4>Api Data Demo</h4><br />
                <Table striped bordered hover>
                    <TableHeader headerData={this.props.apiDataHeader} />
                    <TableApiRow apiData1={this.props.apiData} />
                </Table>
            </div>
        )
    }
}
