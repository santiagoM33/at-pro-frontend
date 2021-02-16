import React, {Fragment, Component} from 'react';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Publish from '../pages/publish/Publish';
import {Switch, Route, Link, Redirect} from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import Header from '../partials/header/Header'


class Routes extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      authed: false,
      loading: false
    }
  }

  render() {
    return this.state.loading === true 
    ? <h2>Cargando...</h2>
    : (
      <BrowserRouter>
        <Fragment>
          <Header onHandleClick={this.onHandleClick}>AT PRO</Header>
        </Fragment>
        <main>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/register'component={Register}/>
            <Route path='/login'component={Login}/>
            <Route path='/publish'component={Publish}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default Routes;
