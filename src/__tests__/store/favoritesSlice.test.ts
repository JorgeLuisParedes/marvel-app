import favoritesReducer, {
	addFavorite,
	removeFavorite,
	toggleFavorite,
	selectFavorites,
	selectIsFavorite,
	selectFavoritesCount,
	FavoritesState,
} from 'store/favoritesSlice';

import { Character } from 'types/CharacterTypes';
import { UIState } from 'store/uiSlice';
import { marvelApi } from 'api/marvelApi';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const mockCharacter: Character = {
	id: 1,
	name: 'Goku',
	image: 'https://dbzapi.com/images/goku.jpg',
};

type MockRootState = {
	favorites: FavoritesState;
	ui: UIState;
	[marvelApi.reducerPath]: ReturnType<typeof marvelApi.reducer>;
	_persist: PersistPartial['_persist'];
};

const mockRootState: MockRootState = {
	favorites: { favorites: [mockCharacter] },
	ui: { showFavoritesView: false },
	[marvelApi.reducerPath]: {} as ReturnType<typeof marvelApi.reducer>,
	_persist: {
		version: 1,
		rehydrated: true,
	},
};

describe('favoritesSlice (Dragon Ball)', () => {
	it('debería agregar un personaje favorito', () => {
		const state = favoritesReducer(undefined, addFavorite(mockCharacter));
		expect(state.favorites).toContainEqual(mockCharacter);
	});

	it('no debería agregar el mismo personaje dos veces', () => {
		const state = favoritesReducer(
			{ favorites: [mockCharacter] },
			addFavorite(mockCharacter)
		);
		expect(state.favorites).toHaveLength(1);
	});

	it('debería eliminar un personaje favorito por ID', () => {
		const state = favoritesReducer(
			{ favorites: [mockCharacter] },
			removeFavorite(mockCharacter.id)
		);
		expect(state.favorites).toHaveLength(0);
	});

	it('toggle: debería eliminar si ya es favorito', () => {
		const state = favoritesReducer(
			{ favorites: [mockCharacter] },
			toggleFavorite(mockCharacter)
		);
		expect(state.favorites).toHaveLength(0);
	});

	it('toggle: debería agregar si no es favorito', () => {
		const state = favoritesReducer(
			{ favorites: [] },
			toggleFavorite(mockCharacter)
		);
		expect(state.favorites).toContainEqual(mockCharacter);
	});

	it('selector selectFavorites', () => {
		expect(selectFavorites(mockRootState)).toEqual([mockCharacter]);
	});

	it('selector selectIsFavorite', () => {
		expect(selectIsFavorite(mockRootState, 1)).toBe(true);
		expect(selectIsFavorite(mockRootState, 999)).toBe(false);
	});

	it('selector selectFavoritesCount', () => {
		expect(selectFavoritesCount(mockRootState)).toBe(1);
	});
});
