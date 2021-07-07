import React, { Fragment, Component } from "react";
//import { withRouter } from "react-router-dom";
import Axios from 'axios';
import Home from "pages/home/Home";
import Escort from "pages/escort/Escort";
import ResetPasswordRequest from "pages/reset-password-request/ResetPasswordRequest";
import ResetPassword from "pages/reset-password/ResetPassword";
import Error404 from "pages/404/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "partials/header/Header";
import { PrivateRoute, PublicRoute } from "helpers/routeRedirectAuth";
//import { makeCancelable } from "helpers/cancelablePromise";
/* import ResetPasswordRoutes from '../pages/reset-password'; */
//import { Redirect as RouterRedirect } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { getEscorts, getUsers } from '../services/api'

//const Home = React.lazy(() => import("pages/home/Home"));
//const Escort = React.lazy(() => import("pages/escort/Escort"));
const Login = React.lazy(() => import("pages/login/Login"));
const Register = React.lazy(() => import("pages/register/Register"));
const Announce = React.lazy(() => import("pages/announce/Announce"));
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
            users: [],
            escorts: [],
            photos: [],
            pagination: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.checkLoginStatus = this.checkLoginStatus.bind(this);
        //this.fileGrabber = this.fileGrabber.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.roleChanger = this.roleChanger.bind(this);
        //this.getUsers = this.getUsers.bind(this);
        this.getPhotos = this.getPhotos.bind(this);
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
                    });
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
        this.checkLoginStatus();
        getEscorts().then( res=>this.setState({escorts: res.data || []}) );
        getUsers().then( res=>this.setState({users: res.data || []}) );
        this.getPhotos()
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
        //console.log('Role Changer: ', id);
        this.setState({role: id})
    }

    /*getUsers(){
        const signal = this.controller.signal;
        const URI = 'http://159.65.218.115';
        fetch(`${URI}/users`, { signal })
            .then(res => res.json())
            .then(resJson => this.setState({users: resJson.data || [], pagination: resJson})) 
            .catch(e=>console.log('Error fetch Escorts: ', e)) 
    }*/
    getPhotos(){
        const signal = this.controller.signal;
        const URI = 'https://picsum.photos';
        fetch(`${URI}/200/300`, { signal })
            .then(res => {
                    if (res.status === 200) {
                        this.setState({photos: res.url})
                    }
                }
            )
            .catch(e=>console.log('Error fetch photos: ', e)) 
    }
    /*fileGrabber(name){
        const arrayName = name.split(',')
        const pathName = arrayName.join('-');
        //console.log(pathName)
        this.setState({file: pathName})
    }*/
    render() {
        //console.log('Escorts: ', this.state.escorts)
        //console.log('Users: ', this.state.users)
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
                                        getUsers={getUsers}
                                        users={this.state.users}
                                        photos={this.state.photos}
                                    />
                                </>
                            )}
                        />
                         <Route
                            exact
                            path={'/:alias'}
                            //authed={!!this.state.user}  
                            component={publicProps=> (                       
                                <Escort 
                                    {...publicProps}
                                    getEscorts={getEscorts}
                                    escorts={this.state.escorts}
                                    users={this.state.users}
                                    id={this.props.location} 
                                />
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
                                    />
                                </>
                            )}                         
                        />  
                        
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
                                        getUsers={this.getUsers}
                                        users={this.state.users}
                                        loggedInStatus={this.state.loggedInStatus}
                                        role={this.state.role}
                                        pagination={this.state.pagination}
                                        token={this.state.token}
                                        handleLogout={this.handleLogout}
                                    />
                                )}
                            />
                         </React.Suspense>
                       
                       
                        <Route component={Error404} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default Routes;
