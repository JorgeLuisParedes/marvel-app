import { screen, waitFor, act } from '@testing-library/react';
import { Main } from 'components/character-list/Main';
import { renderWithStore } from '../../utils/renderWithStore';
import * as api from 'api/marvelApi';
import { Character } from 'types/CharacterTypes';

const mockCharacters: Character[] = [
	{ id: 1, name: 'Goku', image: 'goku.jpg' },
	{ id: 2, name: 'Vegeta', image: 'vegeta.jpg' },
];

jest.mock('api/marvelApi', () => ({
	...jest.requireActual('api/marvelApi'),
	useGetCharactersQuery: jest.fn(),
}));

describe('Main (integración completa)', () => {
	beforeEach(() => {
		(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
			data: null,
			isLoading: true,
			error: null,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('muestra el estado de carga inicialmente y luego los resultados', async () => {
		(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
			data: null,
			isLoading: true,
			error: null,
		});

		const { rerender } = renderWithStore(<Main />, {
			withRouter: true,
		});

		expect(
			screen.getByPlaceholderText(/search a character/i)
		).toBeInTheDocument();
		expect(screen.getByRole('main')).toBeInTheDocument();
		expect(screen.getByText(/results/i)).toBeInTheDocument();

		await act(async () => {
			(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
				data: { items: mockCharacters },
				isLoading: false,
				error: null,
			});
			rerender(<Main />);
		});

		await waitFor(() => {
			expect(screen.getByText('Goku')).toBeInTheDocument();
			expect(screen.getByText('Vegeta')).toBeInTheDocument();
		});
	});

	it('renderiza filtro + lista y muestra resultados filtrados', async () => {
		(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
			data: { items: mockCharacters },
			isLoading: false,
			error: null,
		});

		renderWithStore(<Main />, { withRouter: true });

		expect(
			screen.getByPlaceholderText(/search a character/i)
		).toBeInTheDocument();
		expect(screen.getByRole('main')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText(/results/i)).toBeInTheDocument();
			expect(screen.getByText('Goku')).toBeInTheDocument();
			expect(screen.getByText('Vegeta')).toBeInTheDocument();
		});
	});

	it('maneja errores de la API correctamente', async () => {
		(api.useGetCharactersQuery as jest.Mock).mockReturnValue({
			data: null,
			isLoading: false,
			error: { message: 'Error al cargar los personajes' },
		});

		renderWithStore(<Main />, { withRouter: true });

		await waitFor(() => {
			expect(screen.getByText(/error/i)).toBeInTheDocument();
			expect(
				screen.getByText(/ocurrió un problema/i)
			).toBeInTheDocument();
		});
	});
});
