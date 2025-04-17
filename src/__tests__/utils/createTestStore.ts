import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer, { FavoritesState } from 'store/favoritesSlice';
import uiReducer, { UIState } from 'store/uiSlice';
import themeReducer from 'store/themeSlice';
import { ThemeState } from 'types/ThemeTypes';
import { marvelApi } from 'api/marvelApi';

export type TestRootState = {
	favorites: FavoritesState;
	ui: UIState;
	theme: ThemeState;
	[marvelApi.reducerPath]: ReturnType<typeof marvelApi.reducer>;
};

const rootReducer = combineReducers({
	favorites: favoritesReducer,
	ui: uiReducer,
	theme: themeReducer,
	[marvelApi.reducerPath]: marvelApi.reducer,
});

export const createTestStore = (preloadedState?: Partial<TestRootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false,
			}).concat(marvelApi.middleware),
	});
