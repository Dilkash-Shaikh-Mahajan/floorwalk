import React, { Component, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
const Dashboard = lazy(() => import('./pages/Dashboard.js'));
class MasterRoutes extends Component {
  render () {
    return (
         
        <Switch>
          <Route exact path="/main_user_dashboard" component={ Dashboard } />


          {/* <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } /> */}


          {/* <Redirect to="/main_user_dashboard" /> */}
        </Switch>
    );
  }
}

export default MasterRoutes;