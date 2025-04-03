import { renderHook, act } from '@testing-library/react';
import { useFavoritesNavigation } from 'hooks/useFavoritesNavigation';
import { showAll, showFavorites } from 'store/uiSlice';

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('useFavoritesNavigation', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('showAllCharacters despacha showAll y navega a "/"', () => {
		const { result } = renderHook(() => useFavoritesNavigation());

		act(() => {
			result.current.showAllCharacters();
		});

		expect(mockDispatch).toHaveBeenCalledWith(showAll());
		expect(mockNavigate).toHaveBeenCalledWith('/');
	});

	it('showFavoriteCharacters despacha showFavorites y navega a "/"', () => {
		const { result } = renderHook(() => useFavoritesNavigation());

		act(() => {
			result.current.showFavoriteCharacters();
		});

		expect(mockDispatch).toHaveBeenCalledWith(showFavorites());
		expect(mockNavigate).toHaveBeenCalledWith('/');
	});
});
