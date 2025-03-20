import { configureStore } from '@reduxjs/toolkit';
import { marvelApi } from '../api/marvelApi';

export const store = configureStore({
	reducer: {
		[marvelApi.reducerPath]: marvelApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(marvelApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
