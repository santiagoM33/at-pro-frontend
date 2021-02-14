import React from 'react';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Publish from '../pages/publish/Publish';
import {Switch, Route} from 'react-router';
import { BrowserRouter} from 'react-router-dom';




const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route path='/login'component={Login}/>
        <Route path='/publish'component={Publish}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
