import { render, screen } from '@testing-library/react';
import { LogoMarvel } from 'components/ui/logo/LogoMarvel';

describe('LogoMarvel', () => {
	it('debe renderizar el SVG accesible del logo de Marvel', () => {
		render(<LogoMarvel />);

		const svg = screen.getByRole('img', { name: /logo de marvel/i });

		expect(svg).toBeInTheDocument();
		expect(svg.tagName.toLowerCase()).toBe('svg');
		expect(svg).toHaveAttribute('width', '130');
		expect(svg).toHaveAttribute('height', '52');
	});
});
