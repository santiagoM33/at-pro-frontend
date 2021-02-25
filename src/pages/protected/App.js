import React, { Fragment, Component } from 'react';
import Publish from 'pages/protected/publish/Publish';

import Error404 from 'pages/404/Error404';
import { BrowserRouter, Route, Switch, Redirect as RouterRedirect } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from 'helpers/routeRedirectAuth';
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
      authed: false,
      isHome: false,
      to: null
    }
  }


  render() {
    return (
        <BrowserRouter>
          <Fragment>

          </Fragment>
          <main>
            <Toaster></Toaster>
            <Switch>
              <PrivateRoute authed={!!this.state.user} path='/publish' component={Publish} />

              <Route component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      );
  }
}

export default App;
