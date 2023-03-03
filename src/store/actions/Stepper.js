import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	interestArea: [],
	industriesData: [],
	categoriesData: [],
	subCategories: [],
	isUserAlreadyRegistered: false,
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
		categoriesDataFunction: (state, action) => {
			state.categoriesData = action.payload;
		},
		subCategoriesFunction: (state, action) => {
			state.subCategories = action.payload;
		},
		isUserAlreadyRegisteredFunction: (state, action) => {
			state.isUserAlreadyRegistered = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	interestAreaFunction,
	industriesDataFunction,
	categoriesDataFunction,
	subCategoriesFunction,
	isUserAlreadyRegisteredFunction,
} = stepperSlice.actions;

export default stepperSlice.reducer;
