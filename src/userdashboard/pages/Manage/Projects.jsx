import React from 'react';
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarExport,
} from '@mui/x-data-grid';
function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}
const Projects = () => {
	const columns = [
		{ field: 'OrderId', headerName: 'OrderId', width: 70 },
		{ field: 'Customer', headerName: 'Customer', width: 130 },
		{ field: 'Order', headerName: 'Order', width: 130 },
		{
			field: 'Delivery Date',
			headerName: 'Delivery Date',
			type: 'date',
			width: 90,
		},
		{
			field: 'Delivery Pricing',
			headerName: 'Delivery Pricing',
			type: 'number',
			width: 90,
		},
		{
			field: 'Delivery Status',
			headerName: 'Delivery Status',

			width: 160,
		},
		{
			field: 'Payment Method',
			headerName: 'Payment Method',

			width: 160,
		},
	];
	const rows = [
		{ OrderId: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
		{ OrderId: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
		{ OrderId: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
		{ OrderId: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
		{
			OrderId: 5,
			lastName: 'Targaryen',
			firstName: 'Daenerys',
			age: 40,
		},
		{ OrderId: 6, lastName: 'Melisandre', firstName: null, age: 150 },
		{ OrderId: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
		{ OrderId: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
		{ OrderId: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
	];
	return (
		<div>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid
					rows={rows}
					getRowId={(row) => row.internalId}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
					components={{
						Toolbar: CustomToolbar,
					}}
				/>
			</div>
		</div>
	);
};

export default Projects;
