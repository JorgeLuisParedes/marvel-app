import { render, screen, fireEvent, act } from '@testing-library/react';
import { CharacterInfo } from 'components/character-details/CharacterInfo';
import { CharacterDetails as CharacterType } from 'types/CharacterTypes';
import { useFavoriteCharacter } from 'hooks/useFavoriteCharacter';

jest.mock('hooks/useFavoriteCharacter');

describe('CharacterInfo', () => {
	const mockToggleFavorite = jest.fn();

	const mockCharacter: CharacterType = {
		id: 1,
		name: 'Goku',
		image: 'https://example.com/goku.png',
		description: 'Saiyajin criado en la Tierra.',
		transformations: [],
	};

	beforeEach(() => {
		jest.clearAllMocks();

		(useFavoriteCharacter as jest.Mock).mockReturnValue({
			isFavorite: true,
			handleToggleFavorite: mockToggleFavorite,
		});
	});

	it('debe renderizar el nombre, imagen y descripción del personaje', () => {
		render(<CharacterInfo character={mockCharacter} />);

		expect(
			screen.getByRole('heading', { name: 'Goku' })
		).toBeInTheDocument();
		expect(screen.getByAltText('Goku')).toHaveAttribute(
			'src',
			mockCharacter.image
		);
		expect(screen.getByText(mockCharacter.description)).toBeInTheDocument();
	});

	it('debe mostrar "Sin descripción disponible." si no hay descripción', () => {
		const characterSinDescripcion = { ...mockCharacter, description: '' };

		render(<CharacterInfo character={characterSinDescripcion} />);

		expect(
			screen.getByText('Sin descripción disponible.')
		).toBeInTheDocument();
	});

	it('debe llamar a handleToggleFavorite al hacer click en el botón', () => {
		render(<CharacterInfo character={mockCharacter} />);

		const boton = screen.getByRole('button');
		fireEvent.click(boton);

		expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
	});

	it('debe aplicar clase de animación temporal al hacer click', () => {
		jest.useFakeTimers();

		render(<CharacterInfo character={mockCharacter} />);
		const boton = screen.getByRole('button');

		expect(boton.className).not.toContain('scale-110');

		fireEvent.click(boton);

		expect(boton.className).toContain('scale-110');
		expect(boton.className).toContain('opacity-80');

		act(() => {
			jest.advanceTimersByTime(300);
		});

		expect(boton.className).not.toContain('scale-110');
		expect(boton.className).not.toContain('opacity-80');

		jest.useRealTimers();
	});
});
