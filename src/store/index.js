import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './actions/Auth';
import stepperReducer from './actions/Stepper';
export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		stepper: stepperReducer,
	},
});
