import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	refreshToken: '',
	accessToken: '',
};

export const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		refreshTokenFunction: (state, action) => {
			state.refreshToken = action.payload;
		},
		accessTokenFunction: (state, action) => {
			state.accessToken = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { accessTokenFunction, refreshTokenFunction } = authSlice.actions;

export default authSlice.reducer;
