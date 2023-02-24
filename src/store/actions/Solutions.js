import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	solutions: [],
	solution: {},
};

export const solutionSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		solutionsFunction: (state, action) => {
			state.solutions = action.payload;
		},
		solutionFunction: (state, action) => {
			state.solution = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { solutionFunction, solutionsFunction } = solutionSlice.actions;

export default solutionSlice.reducer;
