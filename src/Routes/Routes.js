import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import Register from "pages/register/Register";
import Announce from "pages/announce/Announce";
//import Escort from "pages/escort/Escort";
import ResetPasswordRequest from "pages/reset-password-request/ResetPasswordRequest";
import ResetPassword from "pages/reset-password/ResetPassword";
//import Admin from "pages/protected/admin/Admin";
//import Dashboard from "pages/protected/dashboard/Dashboard";
//import Publish from "pages/protected/publish/Publish";
//import Profile from "pages/protected/profile/Profile";
//import Gallery from "pages/protected/gallery/Gallery";
import Error404 from "pages/404/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "partials/header/Header";
import { PrivateRoute, PublicRoute } from "helpers/routeRedirectAuth";
//import { makeCancelable } from "helpers/cancelablePromise";
/* import ResetPasswordRoutes from '../pages/reset-password'; */
import { Toaster } from "react-hot-toast";
//import { Redirect as RouterRedirect } from "react-router-dom";

/*const Home = React.lazy(() => import("pages/home/Home"));
const Login = React.lazy(() => import("pages/login/Login"));
const Register = React.lazy(() => import("pages/register/Register"));
const Announce = React.lazy(() => import("pages/announce/Announce"));*/
const Escort = React.lazy(() => import("pages/escort/Escort"));
const Admin = React.lazy(() => import("pages/protected/admin/Admin"));
const Dashboard = React.lazy(() => import("pages/protected/dashboard/Dashboard"));
const Publish = React.lazy(() => import("pages/protected/publish/Publish"));
const Profile = React.lazy(() => import("pages/protected/profile/Profile"));
const Gallery = React.lazy(() => import("pages/protected/gallery/Gallery"));


class Routes extends Component {
    constructor(...props) {
        super(...props);

        const user = JSON.parse(localStorage.getItem("user")) ?? null;
        const token = JSON.parse(localStorage.getItem("token")) ?? null;

        this.state = {
            loggedInStatus: 'NOT_LOGGED_IN',
            user,
            token,
            role: null,
            authed: false,
            authenticated: false,
            escorts: []
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.checkLoginStatus = this.checkLoginStatus.bind(this);
        //this.fileGrabber = this.fileGrabber.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.roleChanger = this.roleChanger.bind(this);
        this.getEscorts = this.getEscorts.bind(this);
    }

    controller = new AbortController();

    handleLogin(data) {
        this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: data
        })
        //const name = `${data.user.firstName} ${data.user.lastName}`;
        //this.fileGrabber(name)
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
    
    componentWillUnmount(){this.controller.abort()}

    handleLogout(){
        this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: null
        })
        localStorage.clear('user')
    }

    roleChanger(id){
        console.log('Role Changer: ', id);
        this.setState({role: id})
    }

    getEscorts(){
        const signal = this.controller.signal;
        const URI = 'http://159.65.218.115';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => this.setState({escorts: resJson.data.filter(e=>e.roleId === 2) || []}))
    }
    /*fileGrabber(name){
        const arrayName = name.split(',')
        const pathName = arrayName.join('-');
        //console.log(pathName)
        this.setState({file: pathName})
    }*/
    render() {
        //console.log('Escorts: ', this.state.escorts)
        return (
            <BrowserRouter>
                <Header authed={this.state.authed} handleLogout={this.handleLogout}>AT PRO</Header>
                <main>
                    <Toaster></Toaster>
                    <Switch>
                        <Route exact path="/"
                            render={(props) => (
                                <>
                                    <Home
                                        {...props}
                                        getEscorts={this.getEscorts}
                                        escorts={this.state.escorts}
                                    />
                                </>
                            )}
                        />
                        <Route
                            exact
                            path="/login"
                            authed={!!this.state.user}
                            render={(publicProps) => (
                                <>
                                    <Login
                                        {...publicProps}
                                        user={this.state.user}
                                        handleLogin={this.handleLogin}
                                        loggedInStatus={this.state.loggedInStatus}
                                        //fileGrabber={this.fileGrabber}
                                    />
                                </>
                            )}
                        />
                        <Route
                            exact
                            path="/register"
                            authed={!!this.state.user}
                            render={(publicProps) => (
                                <Fragment>
                                    <Register 
                                        {...publicProps} 
                                        handleLogin={this.handleLogin} 
                                        loggedInStatus={this.state.loggedInStatus}
                                        //fileGrabber={this.fileGrabber}
                                    />
                                </Fragment> 
                            )}
                        />
                        <Route
                            exact  
                            path="/announce" 
                            authed={!!this.state.user}
                            render={(publicProps) => (
                                <>
                                    <Announce
                                        {...publicProps}
                                        user={this.state.user}
                                        handleLogin={this.handleLogin}
                                        loggedInStatus={this.state.loggedInStatus}
                                        //fileGrabber={this.fileGrabber}
                                    />
                                </>
                            )}                         
                        />  
                        <PublicRoute
                            exact
                            path="/reset-password-request"
                            authed={!!this.state.user}
                            component={ResetPasswordRequest}
                        />
                        <PublicRoute
                            exact
                            path="/reset-password"
                            authed={!!this.state.user}
                            component={ResetPassword}
                        />
                        <React.Suspense fallback={<p>Loading...</p>}>
                        <PrivateRoute
                            exact
                            path="/admin"
                            authed={!!this.state.user}
                            component={privateProps=> (
                                <Admin
                                    {...privateProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    handleLogout={this.handleLogout}
                                />
                            )}                    
                        />  
                        <PrivateRoute
                            exact
                            path="/publish"
                            authed={!!this.state.user}
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
                            exact
                            path="/profile"
                            authed={!!this.state.user}
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
                            exact
                            path="/gallery"
                            authed={!!this.state.user}
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
                                exact
                                path="/dashboard"
                                authed={!!this.state.user}
                                component={(privateProps) => (
                                    <Dashboard
                                        {...privateProps}
                                        user={this.state.user}
                                        loggedInStatus={this.state.loggedInStatus}
                                        role={this.state.role}
                                        //roleChanger={this.roleChanger}
                                        handleLogout={this.handleLogout}
                                    />
                                )}
                            />
                        
                        <Route
                            path={'/:alias'}
                            id={this.props.match} 
                            authed={this.state.authed}                         
                        >  
                            <>    
                                <Escort 
                                    user={this.state.user}
                                />
                            </>
                        </Route>
                        </React.Suspense>
                        <Route component={Error404} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default Routes;
