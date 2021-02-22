import React, { Fragment, Component } from 'react';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import ResetPasswordRequest from '../pages/reset-password-request/ResetPasswordRequest';
import ResetPassword from '../pages/reset-password/ResetPassword';
import Publish from '../pages/protected/publish/Publish';
import Panel from '../pages/protected/Panel';
import Error404 from '../pages/404/Error404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../partials/header/Header';

import { PrivateRoute, PublicRoute } from '../helpers/routeRedirectAuth';
import { loginAccountAuth } from '../services/api';
/* import ResetPasswordRoutes from '../pages/reset-password'; */

import { Toaster } from 'react-hot-toast';
import { parse } from 'uuid';


class Routes extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      loading: false,
      loginMessage: null,
      isHome: false,
      user: null,
      errors: [],
      roles: [],
      errorRoles: '',
    }
    this.login = this.login.bind(this)
    this.setMessage = this.setMessage.bind(this)
  }

  componentDidMount(){
    fetch('http://159.65.218.115/roles')
        .then(res => res.json())
        .then(resJson => this.setState({roles: resJson}))
        .catch(err => this.setState({errorRoles: 'No se pueden obtener los roles'}));
  }

  login(email, password) {
    loginAccountAuth({email, password}).then(user => {
      if (!user.errors) {
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ user: user })
        this.setState({ errors:[] })
        this.setState({ loginMessage: null })
      } 
    })
    .catch(err => {
      this.setState({ user:null })
      this.setState({ errors: err.errors })
      this.setState(this.setMessage('Usuario o Password incorrectos.'))
    })
  }

  setMessage(err) {
    return {loginMessage: err}
}


  render() {
    //console.log(this.state.user)
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
              
              <Route exact path='/login'>
                <Header>AT PRO</Header>
                <Login 
                  onLogin={this.login} 
                  errors={this.state.errors}
                  user={this.state.user}
                />
              </Route>
              
              <PublicRoute exact authed={this.state.user} path='/reset-password-request'
                component={ResetPasswordRequest} />
              <PublicRoute exact authed={this.state.user} path='/reset-password'
                component={ResetPassword} />
              
            <PrivateRoute authed={this.state.user} path='/publish'component={Publish}/>
            
            <Route path='/panel'>
              <Panel 
                user={this.state.user}
                authed={this.state.authed}
              />
            </Route>
              <Route component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      );
  }
}

export default Routes;
