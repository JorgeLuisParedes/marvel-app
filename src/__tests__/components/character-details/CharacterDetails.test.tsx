import { renderWithStore } from '__tests__/utils/renderWithStore';
import { screen } from '@testing-library/react';
import { CharacterDetails } from 'components/character-details/CharacterDetails';
import { useCharacterDetails } from 'hooks/useCharacterDetails';
import { CharacterDetails as CharacterType } from 'types/CharacterTypes';

jest.mock('hooks/useCharacterDetails');

describe('CharacterDetails', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('no debe renderizar nada mientras isLoading es true', () => {
		(useCharacterDetails as jest.Mock).mockReturnValue({
			isLoading: true,
			error: false,
			character: null,
		});

		const { container } = renderWithStore(<CharacterDetails />);
		expect(container).toBeEmptyDOMElement();
	});

	it('debe mostrar el mensaje de error si ocurre un error al obtener el personaje', () => {
		(useCharacterDetails as jest.Mock).mockReturnValue({
			isLoading: false,
			error: true,
			character: null,
		});

		renderWithStore(<CharacterDetails />);

		expect(screen.getByText('Personaje no encontrado')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Ocurrió un error al obtener los datos del personaje.'
			)
		).toBeInTheDocument();
	});

	it('debe mostrar el mensaje de error si no se encuentra el personaje', () => {
		(useCharacterDetails as jest.Mock).mockReturnValue({
			isLoading: false,
			error: false,
			character: null,
		});

		renderWithStore(<CharacterDetails />);

		expect(screen.getByText('Personaje no encontrado')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Ocurrió un error al obtener los datos del personaje.'
			)
		).toBeInTheDocument();
	});

	it('debe renderizar CharacterInfo y CharacterTransformations cuando el personaje está presente', () => {
		const mockCharacter: CharacterType = {
			id: 101,
			name: 'Iron Man',
			image: 'https://example.com/ironman.png',
			description: 'Genio, millonario, playboy, filántropo.',
			transformations: [
				{
					id: 1,
					name: 'Hulkbuster',
					image: 'https://example.com/hulkbuster.png',
					ki: '9000',
				},
			],
		};

		(useCharacterDetails as jest.Mock).mockReturnValue({
			isLoading: false,
			error: false,
			character: mockCharacter,
		});

		renderWithStore(<CharacterDetails />);

		expect(
			screen.getByRole('heading', { name: 'Iron Man' })
		).toBeInTheDocument();
		expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();
		expect(screen.getByAltText('Iron Man')).toHaveAttribute(
			'src',
			mockCharacter.image
		);

		expect(screen.getByText('Hulkbuster')).toBeInTheDocument();
		expect(screen.getByText('Ki: 9000')).toBeInTheDocument();
		expect(screen.getByAltText('Hulkbuster')).toHaveAttribute(
			'src',
			'https://example.com/hulkbuster.png'
		);
	});

	it('debe mostrar mensaje de "Sin transformaciones" si el personaje no tiene transformaciones', () => {
		const mockCharacter: CharacterType = {
			id: 102,
			name: 'Gohan',
			image: 'https://example.com/gohan.png',
			description: 'Hijo de Goku y gran guerrero saiyajin.',
			transformations: [],
		};

		(useCharacterDetails as jest.Mock).mockReturnValue({
			isLoading: false,
			error: false,
			character: mockCharacter,
		});

		renderWithStore(<CharacterDetails />);

		expect(screen.getByText('Gohan')).toBeInTheDocument();
		expect(screen.getByAltText('Gohan')).toHaveAttribute(
			'src',
			mockCharacter.image
		);

		expect(screen.getByText('Sin transformaciones')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Este personaje no tiene transformaciones disponibles.'
			)
		).toBeInTheDocument();
	});
});
