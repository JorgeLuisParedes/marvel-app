import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { marvelApi } from '../api/marvelApi';
import uiReducer from './uiSlice';
import favoritesReducer from './favoritesSlice';
import themeReducer from './themeSlice';

const persistConfig = {
	key: 'marvelApp',
	storage,
	whitelist: [marvelApi.reducerPath, 'favorites', 'theme'],
};

const rootReducer = combineReducers({
	[marvelApi.reducerPath]: marvelApi.reducer,
	ui: uiReducer,
	favorites: favoritesReducer,
	theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(marvelApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
