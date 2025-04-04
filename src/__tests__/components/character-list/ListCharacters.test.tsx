import { screen } from '@testing-library/react';
import { ListCharacters } from 'components/character-list/ListCharacters';
import { renderWithStore } from '../../utils/renderWithStore';
import * as hook from 'hooks/useCharactersList';

jest.mock('components/character-list/Character', () => ({
	Character: ({ name }: { name: string }) => <div>{name}</div>,
}));

const mockCharacters = [
	{ id: 1, name: 'Goku', image: 'goku.jpg' },
	{ id: 2, name: 'Vegeta', image: 'vegeta.jpg' },
];

describe('ListCharacters', () => {
	it('renderiza la lista de personajes correctamente', () => {
		jest.spyOn(hook, 'useCharactersList').mockReturnValue({
			filteredCharacters: mockCharacters,
			getIsFavorite: () => false,
			handleToggleFavorite: () => {},
			isLoading: false,
			error: undefined,
		});

		renderWithStore(
			<ListCharacters searchTerm='' setResultCount={() => {}} />
		);

		expect(screen.getByText('Goku')).toBeInTheDocument();
		expect(screen.getByText('Vegeta')).toBeInTheDocument();
	});

	it('muestra el mensaje de error si hay un error', () => {
		jest.spyOn(hook, 'useCharactersList').mockReturnValue({
			filteredCharacters: [],
			getIsFavorite: () => false,
			handleToggleFavorite: () => {},
			isLoading: false,
			error: { message: 'Error' },
		});

		renderWithStore(
			<ListCharacters searchTerm='' setResultCount={() => {}} />
		);

		expect(screen.getByText(/error/i)).toBeInTheDocument();
		expect(screen.getByText(/ocurrió un problema/i)).toBeInTheDocument();
	});
});
