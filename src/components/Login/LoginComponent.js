import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Col, Form, Row, Label, Input, Button, Jumbotron, Card, CardBody } from 'reactstrap';
import '../../App.css';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            style: {
                color: 'white'
            }
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value })
        localStorage.setItem('email', event.target.value);
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value })
        localStorage.setItem('password', event.target.value);
    }
    handleLogin() {
        if (localStorage.getItem('email')) {
            this.props.handleLogin(true)
        }
        else {
            this.props.handleLogin(false)
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
                                        <u>Login Form</u>
                                    </h3>
                                    <hr />
                                    <Card>
                                        <CardBody>
                                            <Form>
                                                <Label for="exampleText" sm={2}>Email</Label>
                                                <Input
                                                    value={this.state.email}
                                                    name="email"
                                                    type="text"
                                                    onChange={this.onChangeEmail}
                                                />
                                                <Label for="exampleText" sm={2}>Password</Label>
                                                <Input
                                                    value={this.state.password}
                                                    name="password"
                                                    type="password"
                                                    onChange={this.onChangePassword}
                                                /><br />
                                                <Button id="submit" style={this.state.style} onClick={this.handleLogin}>
                                                    <Link style={this.state.style} to='/dashboard'>Submit
                                                    </Link>
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
