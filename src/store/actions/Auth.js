import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	refreshToken: '',
	accessToken: '',
	user: {},
	registerUser: {},
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
		setRegisterUser: (state, action) => {
			state.registerUser = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	accessTokenFunction,
	refreshTokenFunction,
	setLoggedUser,
	setRegisterUser,
} = authSlice.actions;

export default authSlice.reducer;
