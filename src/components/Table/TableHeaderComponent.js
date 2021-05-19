import React, { Component } from 'react'

export default class TableHeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theadData: props.headerData
        }
    }
    render() {
        const data = this.state.theadData.map((data, index) => {
            return <th key={index}>{data}</th>;
        });
        return (
            <thead>
                <tr>
                    {data}
                </tr>
            </thead>
        )
    }
}
