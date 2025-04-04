import { screen, fireEvent } from '@testing-library/react';
import { renderWithStore } from '../../utils/renderWithStore';
import { FilterCharacter } from 'components/character-list/FilterCharacter';

describe('FilterCharacter', () => {
	it('renderiza correctamente el input y el contador', () => {
		renderWithStore(
			<FilterCharacter setSearchTerm={jest.fn()} resultCount={5} />
		);

		expect(
			screen.getByPlaceholderText(/search a character/i)
		).toBeInTheDocument();
		expect(screen.getByText(/5 results/i)).toBeInTheDocument();
	});

	it('muestra "1 result" si el resultCount es 1', () => {
		renderWithStore(
			<FilterCharacter setSearchTerm={jest.fn()} resultCount={1} />
		);

		expect(screen.getByText(/1 result/i)).toBeInTheDocument();
	});

	it('actualiza el input al escribir', () => {
		const setSearchTerm = jest.fn();
		renderWithStore(
			<FilterCharacter setSearchTerm={setSearchTerm} resultCount={0} />
		);

		const input = screen.getByPlaceholderText(/search a character/i);
		fireEvent.change(input, { target: { value: 'goku' } });

		expect(input).toHaveValue('goku');
		expect(setSearchTerm).toHaveBeenCalledWith('goku');
	});

	it('tiene un valor inicial vacío en el input', () => {
		renderWithStore(
			<FilterCharacter setSearchTerm={jest.fn()} resultCount={0} />
		);
		const input = screen.getByPlaceholderText(/search a character/i);
		expect(input).toHaveValue('');
	});
});
