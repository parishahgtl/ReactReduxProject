import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './components/Table/TableComponent';
import { library, header, apiDataHeader } from './data/data';
import FormComponent from './components/MyClassComponent';
import LoginComponent from './components/Login/LoginComponent';
import DashboardComponent from './components/Dashboard/DashboardComponent';
import ProtectedRoute from './components/Route/ProtectedRouteComponent';
import ReduxComponent from './components/Redux/ReduxComponent';
import SocketComponent from './components/Socket/Socket';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const store = configureStore();
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataobject: [],
      showTableDiv: true,
      showFormDiv: false,
      isAuthenticated: false
    }
    this.handleFormDiv = this.handleFormDiv.bind(this);
    this.setUserAuthentication = this.setUserAuthentication.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.setState({ dataobject: json })
      })
      .catch(err => {
        console.log(err);
      });     

  }
  setUserAuthentication(value) {
    this.setState({ isAuthenticated: value })
  }
  handleLogin(value) {
    if (value) {
      this.setState({ isAuthenticated: true })
    }
    else {
      this.setState({ isAuthenticated: false })
    }
  }
  handleLogout = e => {
    if (localStorage.getItem('email')) {
      this.setState({ isAuthenticated: true })
    }
    else {
      this.setState({ isAuthenticated: false })
    }
  }
  handleFormDiv() {
    this.setState({ showTableDiv: false })
    this.setState({ showFormDiv: true })
  }
  render() {
    const { dataobject, isAuthenticated } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">My Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/form'>Form</Link></Nav.Link>
                <Nav.Link><Link to='/redux'>Redux Example</Link></Nav.Link>
                <Nav.Link><Link to='/socket'>socket</Link></Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/login" render={props => <LoginComponent {...props} user={this.state.isAuthenticated.toString()}
              handleLogin={this.handleLogin} />} />
            <ProtectedRoute exact path='/dashboard' component={DashboardComponent} user={isAuthenticated}
              handleLogout={this.handleLogout} />
            <Route path="/form">
              <FormComponent />
            </Route>
            <Route path="/redux">
            <Provider store={store}>
              <ReduxComponent />
              </Provider>
            </Route>
            <Route exact path="/">
              <TableComponent propData={library} headerData={header}
                apiData={dataobject}
                apiDataHeader={apiDataHeader} />
            </Route>
            <Route path="/socket">
              <SocketComponent />
            </Route>
          </Switch>
        </Router>
        {/* {this.state.showTableDiv ? <TableComponent propData={library} headerData={header}
          apiData={dataobject}
          apiDataHeader={apiDataHeader} /> : ''}<br />
        {this.state.showFormDiv ? <FormComponent /> : ''} */}
      </div>
    )
  }
}