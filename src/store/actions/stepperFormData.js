import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	firstPage: [],
	secondPage: [],
	thirdPage: [],
	finalPage: [],
	loginFinalPage: [],
};

export const stepperDataSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		firstPageFunction: (state, action) => {
			state.firstPage = action.payload;
		},
		secondPageFunction: (state, action) => {
			state.secondPage = action.payload;
		},
		thirdPageFunction: (state, action) => {
			state.thirdPage = action.payload;
		},
		finalPageFunction: (state, action) => {
			state.finalPage = action.payload;
		},
		loginFinalPageFunction: (state, action) => {
			state.loginFinalPage = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	firstPageFunction,
	secondPageFunction,
	thirdPageFunction,
	finalPageFunction,
	loginFinalPageFunction,
} = stepperDataSlice.actions;

export default stepperDataSlice.reducer;
