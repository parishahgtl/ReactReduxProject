import React, { Component } from 'react';
import axios from 'axios';
// import { Form, Col, Button } from 'react-bootstrap';
import { Col, Button, FormGroup, Label, Input } from 'reactstrap';
import { city } from '../data/data';

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      username: '',
      password: '',
      confirmpassword: '',
      address: '',
      gender: '',
      subscription: '',
      city: 'Pune',
      valuemale: 'Male',
      valuefemale: 'Female',
      valueother: 'Other',
      cities: city,
      selectedGender: '',
      isYes: false,
      isNo: false
    }

    //Method Bindings
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeSubscriptionYes = this.onChangeSubscriptionYes.bind(this);
    this.onChangeSubscriptionNo = this.onChangeSubscriptionNo.bind(this);

    //references
    this.username = React.createRef();
    this.password = React.createRef();
    this.input = React.createRef();

  }

  handleSubmitForm() {
    const postData = {
      title: this.username.current.value,
      body: this.password.current.value,
      userid: 101
    }
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: postData
    })
      .then(function (response) {
        console.log(response.data);
      })
    this.setState({ username: '' })
    this.setState({ password: '' })
    this.setState({ confirmpassword: '' })
    this.setState({ isYes: false })
    this.setState({ isNo: false })
    this.setState({ address: '' })
    this.setState({ selectedGender: 'Male' })
    this.setState({ city: 'Ahmedabad' })

  }
  onChangeUsername(event) {
    this.setState({ username: event.target.value })
  }
  onChangePassword(event) {
    this.setState({ password: event.target.value })
  }
  onChangeConfirmPassword(event) {
    this.setState({ confirmpassword: event.target.value })
  }
  onChangeCity(event) {
    this.setState({ city: event.target.value })
  }
  onChangeAddress(event) {
    this.setState({ address: event.target.value })
  }
  onChangeGender(event) {
    this.setState({
      selectedGender: event.target.value
    });
  }
  onChangeSubscriptionYes(event) {
    this.setState(initialState => ({
      isYes: !initialState.isYes,
    }));
  }
  onChangeSubscriptionNo(event) {
    this.setState(initialState => ({
      isNo: !initialState.isNo,
    }));
  }
  render() {
    const { confirmpassword, valuemale, username, password,
      valuefemale, address, city, valueother, isNo, isYes } = this.state;
    const cities = this.state.cities.map((option) => (
      <option value={option.value}>{option.label}</option>
    ))
    return (
      <div>
        <form >
          <h4>Employee Registration Form</h4>&nbsp;
        <FormGroup row>
            <Label for="exampleUsername" sm={2}>Username</Label>
            <Col sm={8}>
              <Input type="email" name="username" id="username" value={username}
                innerRef={this.username} onChange={this.onChangeUsername} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={8}>
              <Input type="password" name="password" id="password" value={password}
                innerRef={this.password} onChange={this.onChangePassword} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Confirm Password</Label>
            <Col sm={8}>
              <Input type="password" name="confirmpassword" onChange={this.onChangeConfirmPassword}
                id="confirmpassword" value={confirmpassword} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2} >Select City</Label>
            <Col sm={8}>
              <Input type="select" value={city} onChange={this.onChangeCity} name="select" id="city">
                {cities}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Address</Label>
            <Col sm={8}>
              <Input type="textarea" name="address" onChange={this.onChangeAddress} value={address} id="address" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Gender</Label >
            <div onChange={this.onChangeGender}>
              <Col md={3}>
                <Input type="radio" name="gender"  value={valuemale} defaultChecked={this.state.selectedGender === "Male"} />{' '}Male
          </Col>
              <Col md={3}>
                <Input type="radio" name="gender" value={valuefemale} defaultChecked={this.state.selectedGender === "Female"} />{' '}Female
          </Col>
              <Col md={3}>
                <Input type="radio" name="gender" value={valueother} defaultChecked={this.state.selectedGender === "Other"} />{' '}Other
          </Col>
            </div>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>Newsletter Subscription ? </Label>
            <Col sm={1}>
              <Input type="checkbox" checked={isYes} onChange={this.onChangeSubscriptionYes} id="subscription" />Yes
          </Col>
            <Col sm={1}>
              <Input type="checkbox" checked={isNo} onChange={this.onChangeSubscriptionNo} id="subscription" />No
          </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={10}>
              <Button color="primary" onClick={this.handleSubmitForm}>Submit</Button>
            </Col>
          </FormGroup>
        </form>
      </div>
    )
  }
}
export default FormComponent;