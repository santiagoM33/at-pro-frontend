import React, { Fragment, Component } from "react";
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
import { loginAccountAuth } from "services/api";
/* import ResetPasswordRoutes from '../pages/reset-password'; */

import { Toaster } from "react-hot-toast";

//import { Redirect as RouterRedirect } from "react-router-dom";

/*function Redirecting({ to }) {
    if (to) {
        return <RouterRedirect to={to} />;
    } else {
        return null;
    }
}*/

class Routes extends Component {
    constructor(...props) {
        super(...props);

        const user = localStorage.getItem("user") ?? null;
        const token = localStorage.getItem("token") ?? null;

        //console.log('Logged in user ', user);

        this.state = {
            authed: false,
            isHome: false,
            loggedInStatus: 'NOT_LOGGED_IN',
            user,
            token,
            errors: [],
            //to: null,
        };
        this.login = this.login.bind(this);
        this.setMessage = this.setMessage.bind(this);
        //this.clearErrors = this.clearErrors.bind(this);
        //this.resetUser = this.resetUser.bind(this);
        //this.onCloseSession = this.onCloseSession.bind(this);
    }

    login(email, password) {
        loginAccountAuth({ email, password })
            .then(({ token, user }) => {
                localStorage.setItem("token", JSON.stringify(token));
                localStorage.setItem("user", JSON.stringify(user));
                //console.log('User data ', token, user);
                this.setState({
                    user,
                    token,
                    errors: [],
                    loginMessage: null,
                    //to: "/panel",
                });
            })
            .catch((err) => {
                this.setState({
                    user: null,
                    errors: err.errors,
                    //to: null,
                    ...this.setMessage("Usuario o Password incorrectos."),
                });
            });
        //Se queda pegado el lugin si no se reinicia el state errors
        setTimeout(() => {
            this.setState({
                errors: [],
            });
        }, 1500);
    }

    setMessage(err) {
        return { loginMessage: err };
    }


    //Helpers
    /*clearErrors() {
        this.setState({ errors: [] });
    }

    resetUser() {
        this.setState({ user: null });
    }

    onCloseSession(){
        this.setState({ to: null });
    }*/

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
                        <Route path="/register">
                            <Header>AT PRO</Header>
                            <Register />
                        </Route>

                        <PublicRoute
                            exact
                            path="/login"
                            authed={!!this.state.user}
                            component={(routeProps) => (
                                <>
                                    {/*<Redirecting
                                        to={this.state.to}
                                    ></Redirecting>*/}

                                    <Header>AT PRO</Header>
                                    <Login
                                        onLogin={this.login}
                                        user={this.state.user}
                                        errors={this.state.errors}
                                        loggedInStatus={this.state.loggedInStatus}
                                        //clearErrors={this.clearErrors}
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
                        <Route
                            authed={!!this.state.user}
                            path="/admin"                            
                        >  
                            <Admin />
                        </Route>
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
                            component={Publish}
                        />
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/profile"
                            component={Profile}
                        />
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/gallery"
                            component={Gallery}
                        />
                        <PrivateRoute
                            authed={!!this.state.user}
                            path="/logout"
                            component={Logout}
                        />
                        <PrivateRoute
                            path="/dashboard"
                            authed={!!this.state.user}
                            component={(routeProps) => (
                                <Dashboard
                                    {...routeProps}
                                    user={this.state.user}
                                    loggedInStatus={this.state.loggedInStatus}
                                    //onCloseSession={this.onCloseSession}
                                    //resetUser={this.resetUser}
                                />
                            )}
                        />
                        <Route component={Error404} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default Routes;
