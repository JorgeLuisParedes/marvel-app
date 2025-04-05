import { render, screen } from '@testing-library/react';
import { HeartOutlined } from 'components/ui/icons/HeartOutlined';

describe('HeartOutlined', () => {
	it('debe renderizar el SVG con tamaño por defecto y aria-label fijo', () => {
		render(<HeartOutlined aria-label='favorite-false' />);

		const svg = screen.getByLabelText('favorite-false');

		expect(svg).toBeInTheDocument();
		expect(svg.tagName.toLowerCase()).toBe('svg');
		expect(svg).toHaveAttribute('width', '14');
		expect(svg).toHaveAttribute('height', '14');
	});

	it('debe aplicar tamaño personalizado si se pasa por props', () => {
		render(<HeartOutlined size={20} aria-label='favorite-false' />);

		const svg = screen.getByLabelText('favorite-false');

		expect(svg).toHaveAttribute('width', '20');
		expect(svg).toHaveAttribute('height', '20');
	});
});
