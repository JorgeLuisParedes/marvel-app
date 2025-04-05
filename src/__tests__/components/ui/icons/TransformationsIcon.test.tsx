import { render } from '@testing-library/react';
import { TransformationsIcon } from 'components/ui/icons/TransformationsIcon';

describe('TransformationsIcon', () => {
	it('debe renderizar el SVG con tamaño y color por defecto', () => {
		const { container } = render(<TransformationsIcon />);
		const svg = container.querySelector('svg');

		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('width', '40');
		expect(svg).toHaveAttribute('height', '40');
		expect(svg?.innerHTML).toContain('#EC1D24');
	});

	it('debe aplicar tamaño y color personalizados si se pasan por props', () => {
		const { container } = render(
			<TransformationsIcon size={60} color='#00FF00' />
		);
		const svg = container.querySelector('svg');

		expect(svg).toHaveAttribute('width', '60');
		expect(svg).toHaveAttribute('height', '60');
		expect(svg?.innerHTML).toContain('#00FF00');
	});
});
