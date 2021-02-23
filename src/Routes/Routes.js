import React, { Fragment, Component } from 'react';
import Home from 'pages/home/Home';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';
import ResetPasswordRequest from 'pages/reset-password-request/ResetPasswordRequest';
import ResetPassword from 'pages/reset-password/ResetPassword';
import Publish from 'pages/protected/publish/Publish';
import Panel from 'pages/protected/Panel';
import Error404 from 'pages/404/Error404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'partials/header/Header';

import { PrivateRoute, PublicRoute } from 'helpers/routeRedirectAuth';
import { loginAccountAuth } from 'services/api';
/* import ResetPasswordRoutes from '../pages/reset-password'; */

import { Toaster } from 'react-hot-toast';

import { Redirect as RouterRedirect } from 'react-router-dom';

function Redirecting({ to }) {
  if (to) {
    return (
      <RouterRedirect to={to} />
    )
  } else {
    return null;
  }
}

class Routes extends Component {
  constructor(...props) {
    super(...props);

    const user = localStorage.getItem('user') ?? null;
    const token = localStorage.getItem('token') ?? null;
    
    //console.log('Logged in user ', user);

    this.state = {
      authed: false,
      loading: false,
      isHome: false,
      user,
      token,
      errors: [],
      roles: [],
      errorRoles: '',
      to: null
    }
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    fetch('http://159.65.218.115/roles')
      .then(res => res.json())
      .then(resJson => this.setState({ roles: resJson }))
      .catch(err => this.setState({ errorRoles: 'No se pueden obtener los roles' }));
  }

  login(email, password) {
    loginAccountAuth({ email, password }).then(({ token, user }) => {
      localStorage.setItem('token', JSON.stringify(token));
      localStorage.setItem('user', JSON.stringify(user));
      //console.log('User data ', token, user);
      this.setState({
        user,
        token,
        errors: [],
        loginMessage: null,
        to: '/panel'
      })
    })
      .catch(err => {
        this.setState({
          user: null,
          errors: err.errors,
          to: null,
          ...this.setMessage('Usuario o Password incorrectos.')
        })
      })
  }

  setMessage(err) {
    return { loginMessage: err }
  }

componentDidUpdate(prevProps, prevState){
  console.log(this.state.to)
  if(prevState.to !== this.state.to){
    this.setState({ to: null }); 
  }
}
/*componentWillUnmount(){
  this.setState({user:null})
}*/

  render() {
    console.log(this.state.to)
    return this.state.loading === true
      ? <h2>Cargando...</h2>
      : (
        <BrowserRouter>
          <Fragment>

          </Fragment>
          <main>
            <Toaster></Toaster>
            <Switch>
              
              <Route exact path='/'>
                <Header isHome={this.state.isHome}>AT PRO</Header>
                <Home />
              </Route>
              <Route path='/register'>
                <Header>AT PRO</Header>
                <Register
                  roles={this.state.roles}
                />
              </Route>

              <PublicRoute exact path='/login' authed={!!this.state.user} component={routeProps => (
                <>
                  <Redirecting to={this.state.to}></Redirecting>

                  <Header>AT PRO</Header>
                  <Login
                    onLogin={this.login}
                    errors={this.state.errors}
                    user={this.state.user}
                  />
                </>
              )} />

              <PublicRoute exact authed={this.state.user} path='/reset-password-request'
                component={ResetPasswordRequest} />
              <PublicRoute exact authed={this.state.user} path='/reset-password'
                component={ResetPassword} />

              <PrivateRoute authed={this.state.user} path='/publish' component={Publish} />

              <PrivateRoute path='/panel' authed={!!this.state.user} component={routeProps => (
                <Panel
                  {...routeProps}
                  user={this.state.user}
                  to={this.state.to}
                />
              )} />
              <Route component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      );
  }
}

export default Routes;
