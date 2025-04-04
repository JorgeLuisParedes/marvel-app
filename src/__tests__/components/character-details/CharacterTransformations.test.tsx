import { render, screen } from '@testing-library/react';
import { CharacterTransformations } from 'components/character-details/CharacterTransformations';
import { Transformation } from 'types/CharacterTypes';

describe('CharacterTransformations', () => {
	const mockTransformations: Transformation[] = [
		{
			id: 1,
			name: 'Super Saiyan',
			image: 'https://example.com/ssj.png',
			ki: '5000',
		},
		{
			id: 2,
			name: 'Super Saiyan 2',
			image: 'https://example.com/ssj2.png',
			ki: '8000',
		},
	];

	it('debe renderizar el título "Transformaciones"', () => {
		render(
			<CharacterTransformations transformations={mockTransformations} />
		);
		expect(
			screen.getByRole('heading', { name: /Transformaciones/i })
		).toBeInTheDocument();
	});

	it('debe renderizar las transformaciones si existen', () => {
		render(
			<CharacterTransformations transformations={mockTransformations} />
		);

		expect(screen.getByText('Super Saiyan')).toBeInTheDocument();
		expect(screen.getByText('Ki: 5000')).toBeInTheDocument();

		expect(screen.getByText('Super Saiyan 2')).toBeInTheDocument();
		expect(screen.getByText('Ki: 8000')).toBeInTheDocument();

		expect(screen.getByAltText('Super Saiyan')).toHaveAttribute(
			'src',
			'https://example.com/ssj.png'
		);
		expect(screen.getByAltText('Super Saiyan 2')).toHaveAttribute(
			'src',
			'https://example.com/ssj2.png'
		);
	});

	it('debe mostrar mensaje si no hay transformaciones disponibles', () => {
		render(<CharacterTransformations transformations={[]} />);

		expect(screen.getByText('Sin transformaciones')).toBeInTheDocument();
		expect(
			screen.getByText(
				'Este personaje no tiene transformaciones disponibles.'
			)
		).toBeInTheDocument();
	});
});
