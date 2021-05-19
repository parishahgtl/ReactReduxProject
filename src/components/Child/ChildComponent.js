import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rowData: props.oldData,
            updatedData: {
                id: 4,
                author: 'Arun Shourie',
                title: 'A Secular Agenda',
                readingStatus: false
            }
        }
    }
    updateParentObject = () => {
        this.setState({
            rowData: [...this.props.oldData, this.state.updatedData]
        });
        this.state.rowData = [...this.props.oldData, this.state.updatedData]
        this.props.updatedData(this.state.rowData);
    }
    render() {
        return (
            <div>
                <Button id="submit" onClick={this.updateParentObject}>
                    Add Data
                </Button>
            </div>
        )
    }
}
