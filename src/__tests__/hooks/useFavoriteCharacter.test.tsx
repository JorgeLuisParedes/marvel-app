import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useFavoriteCharacter } from 'hooks/useFavoriteCharacter';
import { toggleFavorite } from 'store/favoritesSlice';
import { Character } from 'types/CharacterTypes';
import { renderWithStore } from '../utils/renderWithStore';
import { createTestStore } from '../utils/createTestStore';

const mockCharacter: Character = {
	id: 1,
	name: 'Goku',
	image: 'goku.jpg',
};

const TestComponent = ({ character }: { character: Character }) => {
	const { isFavorite, handleToggleFavorite } =
		useFavoriteCharacter(character);
	return (
		<div>
			<span>{isFavorite ? 'Favorito' : 'No favorito'}</span>
			<button onClick={handleToggleFavorite}>Toggle</button>
		</div>
	);
};

describe('useFavoriteCharacter (con renderWithStore)', () => {
	it('muestra "Favorito" si el personaje está en favoritos', () => {
		renderWithStore(<TestComponent character={mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [mockCharacter] },
			},
		});

		expect(screen.getByText(/Favorito/i)).toBeInTheDocument();
	});

	it('muestra "No favorito" si el personaje no está en favoritos', () => {
		renderWithStore(<TestComponent character={mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [] },
			},
		});

		expect(screen.getByText(/no favorito/i)).toBeInTheDocument();
	});

	it('dispara toggleFavorite al hacer clic en el botón', async () => {
		const store = createTestStore({
			favorites: { favorites: [] },
		});

		const spy = jest.spyOn(store, 'dispatch');

		renderWithStore(<TestComponent character={mockCharacter} />, {
			store, // ✅ solo esto, sin preloadedState
		});

		await userEvent.click(screen.getByText(/toggle/i));

		expect(spy).toHaveBeenCalledWith(toggleFavorite(mockCharacter));
	});
});
