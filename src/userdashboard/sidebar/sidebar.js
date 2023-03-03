import React from 'react';
import {
	CDBSidebar,
	CDBBox,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				overflow: 'scroll initial',
			}}>
			<CDBSidebar textColor='#000' backgroundColor='#fff'>
				<CDBSidebarHeader
					prefix={<i className='fa fa-bars fa-large'></i>}>
					<Link
						to='/'
						className='text-decoration-none'
						style={{
							color: 'inherit',
							fontSize: 16,
							fontWeight: 600,
						}}>
						Your Dashboard
					</Link>
				</CDBSidebarHeader>

				<CDBSidebarContent className='sidebar-content'>
					<CDBSidebarMenu>
						<Link to={'/user_dashboard'} key='userdash'>
							<CDBSidebarMenuItem
								icon='columns'
								iconType='solid'
								textColor='#333'
								textFontSize='14px'>
								Dashboard
							</CDBSidebarMenuItem>
						</Link>

						<CDBBox
							tag='p'
							style={{
								color: 'inherit',
								fontSize: 14,
								fontWeight: 800,
								// fontFamily: 'Montserrat',
								lineHeight: '17px',
								paddingLeft: '35px',
								color: '#B5C7CF',
								textTransform: 'uppercase',
							}}>
							Analyse
						</CDBBox>
						<Link
							to={
								'/user_dashboard/user_personal_info'
							}>
							<CDBSidebarMenuItem
								icon='user'
								iconType='solid'
								textColor='#333'
								textFontSize='14px'>
								Reports
							</CDBSidebarMenuItem>
						</Link>
						<Link to={'/user_dashboard/user_orders'}>
							<CDBSidebarMenuItem
								icon='table'
								iconType='solid'
								textColor='#333'
								textFontSize='14x'>
								Insights
							</CDBSidebarMenuItem>
						</Link>
						<h1
							style={{
								color: 'inherit',
								fontSize: 14,
								fontWeight: 800,
								// fontFamily: 'Montserrat',
								lineHeight: '17px',
								paddingLeft: '35px',
								color: '#B5C7CF',
								textTransform: 'uppercase',
							}}>
							Manage
						</h1>
						<Link to={'/user_dashboard/user_projects'}>
							<CDBSidebarMenuItem
								icon='chart-line'
								iconType='solid'
								textColor='#333'
								textFontSize='14px'>
								Projects
							</CDBSidebarMenuItem>
						</Link>
						<Link to={'/user_dashboard/user_stores'}>
							<CDBSidebarMenuItem
								icon='exclamation-circle'
								iconType='solid'
								textColor='#333'
								textFontSize='14px'>
								stores
							</CDBSidebarMenuItem>
						</Link>
						<h1
							style={{
								color: 'inherit',
								fontSize: 14,
								fontWeight: 800,
								// fontFamily: 'Montserrat',
								lineHeight: '17px',
								paddingLeft: '35px',
								color: '#B5C7CF',
								textTransform: 'uppercase',
							}}>
							Payments
						</h1>
						<Link to={'/user_dashboard/user_invoices'}>
							<CDBSidebarMenuItem
								icon='chart-line'
								iconType='solid'
								textColor='#333'
								textFontSize='14px'>
								Invoices
							</CDBSidebarMenuItem>
						</Link>
					</CDBSidebarMenu>
				</CDBSidebarContent>

				<CDBSidebarFooter style={{ textAlign: 'center' }}>
					<div
						style={{
							paddingTop: 5,
							paddingBottom: 20,
							fontSize: 14,
							fontWeight: 600,
						}}>
						Budventure
					</div>
				</CDBSidebarFooter>
			</CDBSidebar>
		</div>
	);
};

export default Sidebar;
