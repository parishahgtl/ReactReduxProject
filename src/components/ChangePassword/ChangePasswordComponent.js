import React, { Component } from 'react'
import { Container, Col, Form, Row, Label, Input, Button, Jumbotron, Card, CardBody } from 'reactstrap';

export default class ChangePasswordComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldpassword: '',
            newpassword: '',
            confirmpassword: ''
        }
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    }
    componentDidMount() {
        const oldpass = localStorage.getItem('password');
        this.setState({ oldpassword: oldpass })
    }
    onChangeConfirmPassword(event) {
        this.setState({ confirmpassword: event.target.value })
    }
    onChangeNewPassword(event) {
        this.setState({ newpassword: event.target.value })
    }
    handleChangePassword = () => {
        if (this.state.newpassword === this.state.confirmpassword) {
            localStorage.setItem('password', this.state.confirmpassword)
            alert('Password changed successfully ! ')
            this.setState({ oldpassword: this.state.newpassword })
            this.setState({ confirmpassword: '' })
            this.setState({ newpassword: '' })
        }
    }
    render() {
        return (
            <div><br /><br /><br />
                <div className="App">
                    <Container>
                        <Row>
                            <Col />
                            <Col lg="8">
                                <Jumbotron>
                                    <h3>
                                        <u>Change Password</u>
                                    </h3>
                                    <hr />
                                    <Card>
                                        <CardBody>
                                            <Form>
                                                <Label for="exampleText" md={12}>Old Password</Label>
                                                <Input
                                                    value={this.state.oldpassword}
                                                    name="email"
                                                    type="text"
                                                    readOnly
                                                />
                                                <Label for="exampleText" md={12}>New Password</Label>
                                                <Input
                                                    value={this.state.newpassword}
                                                    name="password"
                                                    type="password"
                                                    onChange={this.onChangeNewPassword}
                                                />
                                                <Label for="exampleText" md={12}>Confirm Password</Label>
                                                <Input
                                                    value={this.state.confirmpassword}
                                                    name="password"
                                                    type="password"
                                                    onChange={this.onChangeConfirmPassword}
                                                /><br />
                                                <Button id="submit" onClick={this.handleChangePassword}>Submit
                                                </Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Jumbotron>
                            </Col>
                            <Col />
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}
