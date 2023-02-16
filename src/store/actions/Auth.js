import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	refreshToken: '',
	accessToken: '',
	user: {},
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
		setLoggedUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { accessTokenFunction, refreshTokenFunction, setLoggedUser } =
	authSlice.actions;

export default authSlice.reducer;
