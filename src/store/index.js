import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './actions/Auth';
import stepperReducer from './actions/Stepper';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import Solutions from './actions/Solutions';
const persistConfig = {
	key: 'root',
	storage,
};
export const store = configureStore({
	reducer: {
		auth: AuthReducer,
		solutions: Solutions,
		stepper: persistReducer(persistConfig, stepperReducer),
	},
});
