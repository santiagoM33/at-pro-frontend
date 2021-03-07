import React, { Fragment, Component } from "react";
import Axios from 'axios';
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Announce from "pages/announce/Announce";
import Escort from "pages/escort/Escort";
import ResetPasswordRequest from "pages/reset-password-request/ResetPasswordRequest";
import ResetPassword from "pages/reset-password/ResetPassword";
import Admin from "pages/protected/admin/Admin";
import Dashboard from "pages/protected/dashboard/Dashboard";
import Publish from "pages/protected/publish/Publish";
import Profile from "pages/protected/profile/Profile";
import Gallery from "pages/protected/gallery/Gallery";
import Logout from "pages/protected/logout/Logout";
import Error404 from "pages/404/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "partials/header/Header";

import { PrivateRoute, PublicRoute } from "helpers/routeRedirectAuth";
import { makeCancelable } from "helpers/cancelablePromise";
/* import ResetPasswordRoutes from '../pages/reset-password'; */

import { Toaster } from "react-hot-toast";
//import { Redirect as RouterRedirect } from "react-router-dom";



class Routes extends Component {
    constructor(...props) {
        super(...props);

        const user = JSON.parse(localStorage.getItem("user")) ?? null;
        const token = JSON.parse(localStorage.getItem("token")) ?? null;

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN',
            user,
            token,
            role: 2,
            authed: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.checkLoginStatus = this.checkLoginStatus.bind(this);
        this.roleGrabber = this.roleGrabber.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    controller = new AbortController();

    handleLogin(data) {
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data
        })
    }

    checkLoginStatus(){
        const accessToken = this.state.token;
        const BASE_URI = 'http://159.65.218.115';
        const authAxios = Axios.create({
            baseURL: BASE_URI,
            withCredentials: false,
            headers: {
                authorization: `Bearer ${accessToken}`,
            }
        })
        
        authAxios.get(`/restricted`, {signal: this.controller.signal})
            .then(res => {
                if (res.data && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
                    this.setState({
                        loggedInStatus: 'LOGGED_IN',
                        authed: res.data
                    })
                } else if (!res.data && this.state.loggedInStatus === 'LOGGED_IN') {
                    this.setState({
                        loggedInStatus: 'NOT_LOGGED_IN',
                        authed: false
                    })
                }
            })
            .catch(err => console.log('Check login error', err))
    }

    componentDidMount(){        
        this.checkLoginStatus()
    }

    componentWillUnmount(){
        this.controller.abort();
    }

    handleLogout(){
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: null
        })
        localStorage.clear('user')
    }

    roleGrabber(id){
        this.setState({role: id})
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment></Fragment>
                <main>
                    <Toaster></Toaster>
                    <Switch>
                        <Route exact path="/">
                            <Header isHome={this.state.isHome}>AT PRO</Header>
                            <Home />
                        </Route>
                        <Route 
                            path="/register"
                            render={(routeProps) => (
                                <Fragment>
                                    <Header>AT PRO</Header>
                                    <Register {...routeProps} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus}/>
                                </Fragment>
                            )}
                        />

                        <Route
                            exact
                            path="/login"
                            //authed={!!this.state.user}
                            render={(routeProps) => (
                                <>
                                    <Header>AT PRO</Header>
                                    <Login
                                        {...routeProps}
                                        user={this.state.user}
                                        handleLogin={this.handleLogin}
                                        loggedInStatus={this.state.loggedInStatus}
                                    />
                                </>
                            )}
                        />

                        <Route
                            authed={!!this.state.user}
                            path="/announce"                            
                        >  
                            <Header>AT PRO</Header>
                            <Announce />
                        </Route>
                        <Route
                            authed={!!this.state.user}
                            path="/escort"                            
                        >  
                            <Header>AT PRO</Header>
                            <Escort />
                        </Route>
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/admin"
                            component={privateProps=> (
                                <Admin
                                    {...privateProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    handleLogout={this.handleLogout}
                                />
                            )}                    
                        />  
                            
                        <PublicRoute
                            exact
                            authed={!!this.state.user}
                            path="/reset-password-request"
                            component={ResetPasswordRequest}
                        />
                        <PublicRoute
                            exact
                            authed={!!this.state.user}
                            path="/reset-password"
                            component={ResetPassword}
                        />

                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/publish"
                            component={privateProps=> (
                                <Publish
                                    {...privateProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    handleLogout={this.handleLogout}
                                />
                            )}
                        />
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/profile"
                            component={privateProps=> (
                                <Profile
                                    {...privateProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    handleLogout={this.handleLogout}
                                />
                            )}
                        />
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/gallery"
                            component={privateProps=> (
                                <Gallery
                                    {...privateProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    handleLogout={this.handleLogout}
                                />
                            )}
                        />
                        <PrivateRoute
                            path="/dashboard"
                            authed={!!this.state.user}
                            component={(privateProps) => (
                                <Dashboard
                                    {...privateProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    roleGrabber={this.roleGrabber}
                                    role={this.state.role}
                                    handleLogout={this.handleLogout}
                                />
                            )}
                        />
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/logout"
                            component={Logout}
                        />
                        <Route component={Error404} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default Routes;
