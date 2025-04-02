import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Character } from 'components/character-list/Character';
import { Character as CharacterType } from 'types/CharacterTypes';
import { renderWithStore } from '../../utils/renderWithStore';
import { createTestStore } from '../../utils/createTestStore';
import { toggleFavorite } from 'store/favoritesSlice';

const mockCharacter: CharacterType = {
	id: 1,
	name: 'Goku',
	image: 'goku.jpg',
};

describe('Character (componente real)', () => {
	it('muestra el nombre del personaje', () => {
		renderWithStore(<Character {...mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [] },
			},
			withRouter: true,
		});

		expect(screen.getByText(/goku/i)).toBeInTheDocument();
	});

	it('muestra la imagen del personaje con el src y alt correctos', () => {
		renderWithStore(<Character {...mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [] },
			},
			withRouter: true,
		});

		const image = screen.getByAltText(/goku/i);
		expect(image).toHaveAttribute('src', 'goku.jpg');
	});

	it('enlaza al detalle del personaje con la ruta correcta', () => {
		renderWithStore(<Character {...mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [] },
			},
			withRouter: true,
		});

		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', '/character/1');
	});

	it('dispara toggleFavorite al hacer clic en el botón', async () => {
		const store = createTestStore({
			favorites: { favorites: [] },
		});

		const spy = jest.spyOn(store, 'dispatch');

		renderWithStore(<Character {...mockCharacter} />, {
			store,
			withRouter: true,
		});

		const button = screen.getByRole('button');
		await userEvent.click(button);

		expect(spy).toHaveBeenCalledWith(toggleFavorite(mockCharacter));
	});

	it('muestra el ícono con aria-label "favorite-true" si el personaje es favorito', () => {
		renderWithStore(<Character {...mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [mockCharacter] },
			},
			withRouter: true,
		});

		expect(screen.getByLabelText('favorite-true')).toBeInTheDocument();
	});

	it('muestra el ícono con aria-label "favorite-false" si el personaje no es favorito', () => {
		renderWithStore(<Character {...mockCharacter} />, {
			preloadedState: {
				favorites: { favorites: [] },
			},
			withRouter: true,
		});

		expect(screen.getByLabelText('favorite-false')).toBeInTheDocument();
	});
});
