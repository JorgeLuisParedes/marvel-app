import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer, { FavoritesState } from 'store/favoritesSlice';
import uiReducer, { UIState } from 'store/uiSlice';
// import { marvelApi } from 'api/marvelApi';

export type TestRootState = {
	favorites: FavoritesState;
	ui: UIState;
	// [marvelApi.reducerPath]?: ReturnType<typeof marvelApi.reducer>;
};

// ✅ Usamos combineReducers para tipar correctamente los reducers
const rootReducer = combineReducers({
	favorites: favoritesReducer,
	ui: uiReducer,
	// [marvelApi.reducerPath]: marvelApi.reducer,
});

// ✅ El store de prueba usa rootReducer sin conflictos de tipo
export const createTestStore = (preloadedState?: Partial<TestRootState>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState,
	});
