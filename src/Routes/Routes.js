import React, {Fragment, Component} from 'react';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Publish from '../pages/protected/publish/Publish';
import Panel from '../pages/protected/Panel';
import Error404 from '../pages/404/Error404';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from '../partials/header/Header';

import {PrivateRoute, PublicRoute} from '../helpers/routeRedirectAuth';
import { loginAccountAuth } from '../services/api';


class Routes extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      authed: false,
      loading: false,
      isHome: false,
      user: null,
      errors: [],
    }

    this.login = this.login.bind(this);
    // fijarte si hay usuario con token en el localstorage y recuperarlo
  }

  login(email, password) {
    // Llamado a la api
    loginAccountAuth({ email, password }).then(d => {
      console.log('Success ', d);
      if (!d.errors) {
        localStorage.setItem('user', d);
        this.setState({ user: d});
        this.setState({ errors: [] });
      } else {
        this.setState({ user: null });
        this.setState({ errors: d.errors });
      }
    });

    // exitoso
      // this.setState({ user: ... })
    // error
      // this.setState({ loginError: err });
  }

  render() {
    return this.state.loading === true 
    ?  <h2>Cargando...</h2>       
    : (
      <BrowserRouter>
        <Fragment>
          <Header 
            onHandleClick={this.onHandleClick} 
            authed={this.state.authed}
            isHome={this.state.isHome}
            >
            AT PRO</Header>
        </Fragment>
        <main>
          <Switch>
            <Route exact path='/'component={Home}/>
              <PublicRoute authed={this.state.authed} path='/register' />
              
              {/* <PublicRoute authed={this.state.authed} path='/login' component={Login} /> */}

              <Route exact path='/login'>
                <Login onLogin={this.login} errors={this.state.errors}></Login>
              </Route>

              <Route exact='/restricted'>
                <Panel user={this.state.user}></Panel>
              </Route>
              
            <PrivateRoute authed={this.state.authed} path='/publish'component={Publish}/>
            <PrivateRoute authed={this.state.authed} path='/panel'component={Panel}/>
            <Route component={Error404}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default Routes;
