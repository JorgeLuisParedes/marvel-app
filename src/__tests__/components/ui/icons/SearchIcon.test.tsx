import { render } from '@testing-library/react';
import { SearchIcon } from 'components/ui/icons/SearchIcon';

describe('SearchIcon', () => {
	it('debe renderizar el SVG oculto para accesibilidad', () => {
		const { container } = render(<SearchIcon />);
		const svg = container.querySelector('svg');

		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('aria-hidden', 'true');
		expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
	});

	it('debe aplicar la clase pasada por props', () => {
		const { container } = render(<SearchIcon className='text-red-500' />);
		const svg = container.querySelector('svg');

		expect(svg).toHaveClass('text-red-500');
	});
});
