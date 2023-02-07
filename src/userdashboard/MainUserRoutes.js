import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from 'react-router-dom';
import Dashboard from '../userdashboard/pages/userdashboard';
import PersonalInfo from '../userdashboard/pages/personalinfo';
import Orders from '../userdashboard/pages/orders';
import ChangePassword from '../userdashboard/pages/changepassword';

export default class MainUserRoutes extends Component {
	render() {
		return (
			// <Router>
			<Switch>
				{/* <Route path={`${process.env.PUBLIC_URL + "/"}`} component={Dashboard} /> */}
				{/* <Route path={`${process.env.PUBLIC_URL + "/user_personal_info"}`} component={PersonalInfo} />
            <Route path={`${process.env.PUBLIC_URL + "/user_orders"}`} component={Orders} />
            <Route path={`${process.env.PUBLIC_URL + "/user_changepassword"}`} component={ChangePassword} /
            >             */}

				{/* <Route path='/user_dashboard' /> */}

				{/* New ROUTE */}
				<Route
					exact
					path={`/user_dashboard`}
					component={withRouter(Dashboard)}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/user_dashboard/user_personal_info`}
					component={withRouter(PersonalInfo)}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/user_dashboard/user_orders`}
					component={withRouter(Orders)}
				/>
				<Route
					exact
					path={`${process.env.PUBLIC_URL}/user_dashboard/user_changepassword`}
					component={withRouter(ChangePassword)}
				/>
			</Switch>
			// </Router>
		);
	}
}
