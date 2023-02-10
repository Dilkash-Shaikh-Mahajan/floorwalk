import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	interestArea: '',
	industriesData: '',
};

export const stepperSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		interestAreaFunction: (state, action) => {
			state.interestArea = action.payload;
		},
		industriesDataFunction: (state, action) => {
			state.industriesData = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { interestAreaFunction, industriesDataFunction } =
	stepperSlice.actions;

export default stepperSlice.reducer;
