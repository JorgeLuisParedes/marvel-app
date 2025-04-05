import { screen, fireEvent } from '@testing-library/react';
import { Header } from 'components/ui/Header';
import { useFavoritesNavigation } from 'hooks/useFavoritesNavigation';
import { usePulseOnIncrement } from 'hooks/usePulseOnIncrement';
import { renderWithStore } from '__tests__/utils/renderWithStore';
import { Character } from 'types/CharacterTypes';

jest.mock('hooks/useFavoritesNavigation');
jest.mock('hooks/usePulseOnIncrement');

describe('Header (con store real)', () => {
	const mockShowAllCharacters = jest.fn();
	const mockShowFavoriteCharacters = jest.fn();

	const mockCharacters: Character[] = [
		{ id: 1, name: 'Goku', image: '' },
		{ id: 2, name: 'Vegeta', image: '' },
		{ id: 3, name: 'Piccolo', image: '' },
	];

	beforeEach(() => {
		jest.clearAllMocks();

		(useFavoritesNavigation as jest.Mock).mockReturnValue({
			showAllCharacters: mockShowAllCharacters,
			showFavoriteCharacters: mockShowFavoriteCharacters,
		});
	});

	it('debe renderizar el logo y el contador de favoritos desde el store', () => {
		const preloadedState = {
			favorites: {
				favorites: mockCharacters,
			},
		};

		(usePulseOnIncrement as jest.Mock).mockReturnValue(false);

		renderWithStore(<Header />, { preloadedState });

		expect(screen.getByText('3')).toBeInTheDocument();
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('debe llamar a showAllCharacters al hacer click en el logo', () => {
		const preloadedState = {
			favorites: {
				favorites: [],
			},
		};

		renderWithStore(<Header />, { preloadedState });

		const logo = screen
			.getByRole('navigation')
			.querySelector('div.cursor-pointer');
		fireEvent.click(logo!);

		expect(mockShowAllCharacters).toHaveBeenCalledTimes(1);
	});

	it('debe llamar a showFavoriteCharacters al hacer click en el corazón', () => {
		const preloadedState = {
			favorites: {
				favorites: [mockCharacters[0], mockCharacters[1]],
			},
		};

		renderWithStore(<Header />, { preloadedState });

		const heart = screen.getByText('2').parentElement;
		fireEvent.click(heart!);

		expect(mockShowFavoriteCharacters).toHaveBeenCalledTimes(1);
	});

	it('debe aplicar la clase de animación si usePulseOnIncrement devuelve true', () => {
		const preloadedState = {
			favorites: {
				favorites: mockCharacters,
			},
		};

		(usePulseOnIncrement as jest.Mock).mockReturnValue(true);

		renderWithStore(<Header />, { preloadedState });

		const animatedElement = screen.getByText('3')
			.previousSibling as HTMLElement;
		expect(animatedElement.className).toContain('animate-favorite-pulse');
	});
});
