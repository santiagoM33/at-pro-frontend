import React, {Fragment, Component} from 'react';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Publish from '../pages/protected/publish/Publish';
import Panel from '../pages/protected/Panel';
import Error404 from '../pages/404/Error404';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../partials/header/Header';

import {PrivateRoute, PublicRoute} from '../helpers/routeRedirectAuth';


class Routes extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      authed: false,
      loading: false,
      isHome: false
    }
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
            <PublicRoute authed={this.state.authed} path='/register'component={Register}/>
            <PublicRoute authed={this.state.authed} path='/login'component={Login}/>
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
