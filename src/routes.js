
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import NavBar from './NavBar/NavBar';  
import Home from './components/Home/Home'
import Configs from './components/Configs/Configs'
// import Page1 from './Page1/Page1';
// import Page2 from './Page2/Page2';
// import PageError from './PageError/PageError';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <NavBar /> */}
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/configure"
              component={() => Configs} />
            {/* <Route
              exact
              path="/page1"
              render={() => <Page1 name="React Medellín" />} />
            <Route
              exact
              path="/page2"
              render={() => <Page2 />} />
            <Route component={PageError} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;