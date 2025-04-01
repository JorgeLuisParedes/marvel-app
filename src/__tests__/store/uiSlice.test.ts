import uiReducer, {
	showFavorites,
	showAll,
	selectShowFavoritesView,
	UIState,
} from 'store/uiSlice';

import { FavoritesState } from 'store/favoritesSlice';
import { marvelApi } from 'api/marvelApi';
import { PersistPartial } from 'redux-persist/es/persistReducer';

type MockRootState = {
	ui: UIState;
	favorites: FavoritesState;
	[marvelApi.reducerPath]: ReturnType<typeof marvelApi.reducer>;
	_persist: PersistPartial['_persist'];
};

describe('uiSlice', () => {
	it('debería activar la vista de favoritos', () => {
		const state = uiReducer(undefined, showFavorites());
		expect(state.showFavoritesView).toBe(true);
	});

	it('debería activar la vista general (no favoritos)', () => {
		const state = uiReducer({ showFavoritesView: true }, showAll());
		expect(state.showFavoritesView).toBe(false);
	});

	it('selector selectShowFavoritesView', () => {
		const rootState: MockRootState = {
			ui: { showFavoritesView: true },
			favorites: { favorites: [] },
			[marvelApi.reducerPath]: {} as ReturnType<typeof marvelApi.reducer>,
			_persist: {
				version: 1,
				rehydrated: true,
			},
		};

		expect(selectShowFavoritesView(rootState)).toBe(true);
	});
});
