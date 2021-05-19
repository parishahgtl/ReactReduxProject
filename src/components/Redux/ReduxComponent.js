import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Table,Button } from 'react-bootstrap';
import { getJsonData ,addJsonData} from '../../store/Home'

class ReduxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonArrData:[],
            newData:{
                userId:'101',
                id:101,
                title:'New Title',
                body:'New body'
            },
            headers:["Post Id","Id","Name","Email","Body"]
        }
    }
    UpdatePostData=()=>{
        this.props.addJsonData(this.state.newData);
    }
    componentDidMount(){
    this.props.getJsonData()
    }
    componentWillReceiveProps(props){
        if (props.jsonArr !== this.state.jsonArrData) {
           this.setState({jsonArrData : props.jsonArr})
        }
        if(props.updatedArr){
            alert("Data added successfully");
        }
    }
    render() {
        const data = this.state.headers.map((data, index) => {
            return <th key={index}>{data}</th>;
        });
        const rowData = this.state.jsonArrData.map((data, index) => {
            return <tr key={index}>
                <td>{data.postId}</td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.body}</td>
            </tr>;
        })
        return (
            <div><br/>
                <h4>Comments Section</h4><br/>
                <Button color="primary" onClick={this.UpdatePostData}>Add Data</Button><br /><br/>
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
const mapStateToProps = (state) => 
({
    jsonArr: state.home.jsonData,
    updatedArr:state.home.updatedData
})

const mapDisptachToProps = { getJsonData ,addJsonData}

export default connect(mapStateToProps, mapDisptachToProps)(ReduxComponent)