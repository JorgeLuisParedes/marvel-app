import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { marvelApi } from '../api/marvelApi';
import favoritesReducer from './favoritesSlice';

const persistConfig = {
	key: 'marvelApp',
	storage,
	whitelist: [marvelApi.reducerPath, 'favorites'],
};

const rootReducer = combineReducers({
	[marvelApi.reducerPath]: marvelApi.reducer,
	favorites: favoritesReducer,
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
