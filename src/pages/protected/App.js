import React, { Component } from 'react';
import Publish from 'pages/protected/publish/Publish';
import Panel from 'pages/protected/panel/Panel';
import Profile from 'pages/protected/profile/Profile';
import Gallery from 'pages/protected/gallery/Gallery';
import Logout from 'pages/protected/logout/Logout';

import Error404 from 'pages/404/Error404';
import { BrowserRouter, Route, Switch, Redirect as RouterRedirect } from 'react-router-dom';
import { PrivateRoute } from 'helpers/routeRedirectAuth';
import { Toaster } from 'react-hot-toast';


function Redirecting({ to }) {
  if (to) {
    return (
      <RouterRedirect to={to} />
    )
  } else {
    return null;
  }
}

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      isHome: false,
      to: null,
      authenticated: false
    }
  }

  componentDidMount(){
    let data = JSON.parse(localStorage.getItem('user'))
        if(data.roleId === 2) {
            this.setState({authenticated: true})
        }
  }


  render() {
    return (
        <BrowserRouter>
          <main>
            <Toaster></Toaster>
            <Switch>
              <PrivateRoute path='/panel' authed={!!this.props.user} component={routeProps => (
                <Panel
                  {...routeProps}
                  user={this.props.user}
                  resetUser={this.props.resetUser}
                  authenticated={this.state.authenticated}
                />
              )} />
              <PrivateRoute authed={!!this.props.user} path='/publish' component={Publish} />
              <PrivateRoute authed={!!this.props.user} path='/profile' component={Profile} />
              <PrivateRoute authed={!!this.props.user} path='/gallery' component={Gallery} />
              <PrivateRoute authed={!!this.props.user} path='/logout' component={Logout} />
              <Route component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      );
  }
}

export default App;
