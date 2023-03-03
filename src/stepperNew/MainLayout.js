import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
import MainUserRoutes from './MainUserRoutes';
import Footer from '../components/Footer';
import HeaderTwo from '../components/HeaderTwo';

export default class MainLayout extends Component {
	render() {
		const styles = {
			contentDiv: {
				display: 'flex',
			},
			contentMargin: {
				// marginLeft: '10px',
				width: '100%',
				backgroundColor: 'rgb(245, 248, 250)',

				padding: '30px',
				paddingLeft: '0px',
			},
		};
		return (
			<>
				<HeaderTwo />
				<div style={styles.contentDiv}>
					<Sidebar />
					<div style={styles.contentMargin}>
						{/* <h1 style={{ padding: '20%' }}>
						This is Content Area
					</h1> */}
						<MainUserRoutes />
					</div>
				</div>
				<Footer />
			</>
		);
	}
}
