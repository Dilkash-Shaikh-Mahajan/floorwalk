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
				marginLeft: '10px',
				width: '100%',
				// padding: '20%',
				backgroundColor: '#f5f5f5',
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
