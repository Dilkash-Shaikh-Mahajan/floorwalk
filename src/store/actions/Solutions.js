import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	solutions: [],
	accessToken: '',
};

export const solutionSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		solutionsFunction: (state, action) => {
			state.solutions = action.payload;
		},
		accessTokenFunction: (state, action) => {
			state.accessToken = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { accessTokenFunction, solutionsFunction } = solutionSlice.actions;

export default solutionSlice.reducer;
