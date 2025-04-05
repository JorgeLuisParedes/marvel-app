import { render, screen } from '@testing-library/react';
import { HeartFilled } from 'components/ui/icons/HeartFilled';

describe('HeartFilled', () => {
	it('debe renderizar el SVG con tamaño y color por defecto', () => {
		render(<HeartFilled aria-label='favorite-true' />);

		const svg = screen.getByLabelText('favorite-true');

		expect(svg).toBeInTheDocument();
		expect(svg.tagName.toLowerCase()).toBe('svg');
		expect(svg).toHaveAttribute('width', '14');
		expect(svg).toHaveAttribute('height', '14');
		expect(svg.innerHTML).toContain('#EC1D24');
	});

	it('debe aplicar tamaño y color personalizados si se pasan por props', () => {
		render(
			<HeartFilled aria-label='favorite-true' size={24} color='#FFFFFF' />
		);

		const svg = screen.getByLabelText('favorite-true');
		expect(svg).toHaveAttribute('width', '24');
		expect(svg).toHaveAttribute('height', '24');
		expect(svg.innerHTML).toContain('#FFFFFF');
	});
});
