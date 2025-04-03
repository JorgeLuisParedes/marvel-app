import { renderHook, act } from '@testing-library/react';
import { useCharactersList } from 'hooks/useCharactersList';
import { createTestStore } from '../utils/createTestStore';
import { Provider } from 'react-redux';
import { Character } from 'types/CharacterTypes';
import * as api from 'api/marvelApi';
import * as favoritesSelectors from 'store/favoritesSlice';
import * as uiSelectors from 'store/uiSlice';
import { toggleFavorite } from 'store/favoritesSlice';

const mockCharacters: Character[] = [
	{ id: 1, name: 'Goku', image: 'goku.jpg' },
	{ id: 2, name: 'Vegeta', image: 'vegeta.jpg' },
];

jest.mock('api/marvelApi', () => ({
	...jest.requireActual('api/marvelApi'),
	useGetCharactersQuery: jest.fn(),
}));

describe('useCharactersList', () => {
	const mockSetResultCount = jest.fn();

	const renderUseCharactersList = (options?: {
		searchTerm?: string;
		favorites?: Character[];
		showFavoritesView?: boolean;
	}) => {
		const store = createTestStore({
			favorites: { favorites: options?.favorites ?? [] },
			ui: { showFavoritesView: options?.showFavoritesView ?? false },
		});

		jest.spyOn(favoritesSelectors, 'selectFavorites').mockReturnValue(
			options?.favorites ?? []
		);
		jest.spyOn(uiSelectors, 'selectShowFavoritesView').mockReturnValue(
			options?.showFavoritesView ?? false
		);

		(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
			data: { items: mockCharacters },
			isLoading: false,
			error: null,
		});

		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<Provider store={store}>{children}</Provider>
		);

		return renderHook(
			() =>
				useCharactersList(
					options?.searchTerm ?? '',
					mockSetResultCount
				),
			{ wrapper }
		);
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('filtra los personajes por nombre', () => {
		const { result } = renderUseCharactersList({ searchTerm: 'gok' });
		expect(result.current.filteredCharacters).toHaveLength(1);
		expect(result.current.filteredCharacters[0].name).toBe('Goku');
	});

	it('usa favoritos si showFavoritesView está activo', () => {
		const { result } = renderUseCharactersList({
			searchTerm: '',
			showFavoritesView: true,
			favorites: [mockCharacters[1]],
		});
		expect(result.current.filteredCharacters).toHaveLength(1);
		expect(result.current.filteredCharacters[0].name).toBe('Vegeta');
	});

	it('llama a setResultCount con la cantidad filtrada', () => {
		renderUseCharactersList({ searchTerm: 've' });
		expect(mockSetResultCount).toHaveBeenCalledWith(1);
	});

	it('getIsFavorite retorna true para favoritos', () => {
		const { result } = renderUseCharactersList({
			favorites: [mockCharacters[0]],
		});
		expect(result.current.getIsFavorite(1)).toBe(true);
		expect(result.current.getIsFavorite(2)).toBe(false);
	});

	it('handleToggleFavorite despacha la acción correcta', () => {
		const store = createTestStore({
			favorites: { favorites: [] },
			ui: { showFavoritesView: false },
		});
		const spy = jest.spyOn(store, 'dispatch');

		jest.spyOn(favoritesSelectors, 'selectFavorites').mockReturnValue([]);
		jest.spyOn(uiSelectors, 'selectShowFavoritesView').mockReturnValue(
			false
		);
		(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
			data: { items: mockCharacters },
			isLoading: false,
			error: null,
		});

		const wrapper = ({ children }: { children: React.ReactNode }) => (
			<Provider store={store}>{children}</Provider>
		);

		const { result } = renderHook(
			() => useCharactersList('', mockSetResultCount),
			{ wrapper }
		);

		act(() => {
			result.current.handleToggleFavorite(mockCharacters[0]);
		});

		expect(spy).toHaveBeenCalledWith(toggleFavorite(mockCharacters[0]));
	});
});
