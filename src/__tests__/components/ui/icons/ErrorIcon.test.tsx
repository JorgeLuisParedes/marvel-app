import { render } from '@testing-library/react';
import { ErrorIcon } from 'components/ui/icons/ErrorIcon';

describe('ErrorIcon', () => {
	it('debe renderizar el SVG con tamaño por defecto', () => {
		const { container } = render(<ErrorIcon />);
		const svg = container.querySelector('svg');

		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('width', '100');
		expect(svg).toHaveAttribute('height', '100');
	});

	it('debe aplicar tamaño personalizado si se pasa por props', () => {
		const { container } = render(<ErrorIcon size={48} />);
		const svg = container.querySelector('svg');

		expect(svg).toHaveAttribute('width', '48');
		expect(svg).toHaveAttribute('height', '48');
	});
});
