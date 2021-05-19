import React, { Component } from 'react';
import ChangePasswordComponent from '../ChangePassword/ChangePasswordComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DashboardTable from '../Dashboard/DashboardTable';
import LogoutComponent from '../Logout/LogoutComponent';
import ParentComponent from '../Parent/ParentComponent';

export default class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navLinks: [
                { to: '/dashboard/data', name: 'Dashboard' },
                { to: '/changepassword', name: 'Change Password' },
                { to: '/parent', name: 'Parent Component' },
                { to: '/logout', name: 'Logout' }
            ],
            routes: [
                {
                    path: "/dashboard/data",
                    main: () => <DashboardTable />
                },
                {
                    path: "/changepassword",
                    main: () => <ChangePasswordComponent />
                },
                {
                    path: "/parent",
                    main: () => <ParentComponent />
                },
                {
                    path: "/logout",
                    main: () => <LogoutComponent handleLogout={this.props.handleLogout} />
                }
            ],
            style: {
                background: '#34495e',
                height: '100vh',
                width: '250px',
                positon: 'absolute',
            },
            style2: {
                color: '#fff',
                'text-decoration': 'none',
                display: 'block',
                padding: '20px'
            },
            style3: {
                'font-size': '16px',
                'border-bottom': '1px solid #fff'
            },
            style4: {
                padding: '0',
                margin: '0'
            }
        }
    }
    render() {
        return (
            <Router>
                <div style={{ display: "flex" }}>
                    <div style={this.state.style}>
                        <ul style={this.state.style4}>
                            {this.state.navLinks.map(({ to, name }) => (
                                <li style={this.state.style3}>
                                    <Link style={this.state.style2} to={to}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ flex: 1, padding: "10px" }}>
                        <Switch>
                            {this.state.routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
