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


class Routes extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      authed: false,
      loading: false,
      isHome: false,
      user: null,
      errors: [],
      roles: []
    }
    this.login = this.login.bind(this)
  }

  componentDidMount(){
    fetch('http://159.65.218.115/roles')
        .then(res => res.json())
        .then(resJson => this.setState({roles: resJson}))
        .catch(err => console.log(err))
}

  login(email, password) {
    loginAccountAuth({email, password}).then(user => {
      if (!user.errors) {
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ user: user })
        this.setState({ errors:[] })
        this.setState({ authed: true })
      } 
    })
    .catch(err => {
      this.setState({ user:null })
      this.setState({ errors: err.errors })
      this.setState({ authed: false })
    })
  }


  render() {
    return this.state.loading === true
      ? <h2>Cargando...</h2>
      : (
        <BrowserRouter>
          <Fragment>
          
          </Fragment>
          <main>
            <Toaster></Toaster>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route  path='/register'>
                <Header
                  onHandleClick={this.onHandleClick}
                  authed={this.state.authed}
                >
                AT PRO</Header>
                <Register 
                  authed={this.state.authed}
                  roles={this.state.roles}
                />
              </Route>
              
              <Route exact path='/login'>
                <Header
                  onHandleClick={this.onHandleClick}
                  authed={this.state.authed}
                >
                AT PRO</Header>
                <Login authed={this.state.authed} onLogin={this.login} errors={this.state.errors}></Login>
              </Route>
              
              <PublicRoute exact authed={this.state.authed} path='/reset-password-request'
                component={ResetPasswordRequest} />
              <PublicRoute exact authed={this.state.authed} path='/reset-password'
                component={ResetPassword} />
              
            <PrivateRoute authed={this.state.authed} path='/publish'component={Publish}/>
            
            <Route path='/panel'>
              <Panel 
                roles={this.state.roles}
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
