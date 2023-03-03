import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import AuthReducer from './actions/Auth';
import stepperReducer from './actions/Stepper';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import Solutions from './actions/Solutions';
import stepperData from './actions/stepperFormData';
const customizedMiddleware = getDefaultMiddleware({
	serializableCheck: false,
});
const reducers = combineReducers({
	auth: AuthReducer,
	solutions: Solutions,
	stepper: stepperReducer,
	stepperData: stepperData,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: customizedMiddleware,
});
