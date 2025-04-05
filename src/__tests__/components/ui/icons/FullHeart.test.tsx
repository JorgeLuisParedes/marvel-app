import { render } from '@testing-library/react';
import { FullHeart } from 'components/ui/icons/FullHeart';

describe('FullHeart', () => {
	it('debe renderizar el SVG del ícono de corazón lleno', () => {
		const { container } = render(<FullHeart />);
		const svg = container.querySelector('svg');

		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('width', '24');
		expect(svg).toHaveAttribute('height', '22');
		expect(svg?.innerHTML).toContain('#EC1D24');
	});
});
