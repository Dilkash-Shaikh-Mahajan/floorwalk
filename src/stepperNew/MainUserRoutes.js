import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from 'react-router-dom';
import FinalReview from './pages/FinalReview';
import ProjectDetails from './pages/ProjectDetails';
import ProjectSetup from './pages/ProjectSetup';
import ProjectTargetting from './pages/ProjectTargetting';
import RegisterStepper from './pages/RegisterStepper';

const MainUserRoutes = () => {
	const routesItem = [
		{
			id: 1,
			component: ProjectSetup,
		},
		{
			id: 2,
			component: ProjectTargetting,
		},
		{
			id: 3,
			component: ProjectDetails,
		},
		{
			id: 4,
			component: FinalReview,
		},
		{
			id: 5,
			component: RegisterStepper,
		},
	];
	return (
		// <Router>
		<Switch>
			{/* New ROUTE */}
			{routesItem.map((route, index) => (
				<Route
					key={index}
					exact
					path={`${process.env.PUBLIC_URL}/new_stepper/${route.id}`}
					component={withRouter(route.component)}
				/>
			))}
		</Switch>
		// </Router>
	);
};

export default MainUserRoutes;
