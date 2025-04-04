import { render, screen } from '@testing-library/react';
import { HeartIcon } from 'components/ui/HeartIcon';

describe('HeartIcon', () => {
	it('debe renderizar HeartOutlined si isFavorite es false', () => {
		render(<HeartIcon isFavorite={false} size={20} />);

		const icon = screen.getByLabelText('favorite-false');

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('width', '20');
		expect(icon).toHaveAttribute('height', '20');
	});

	it('debe renderizar HeartFilled rojo si es favorito y no está hovered', () => {
		render(<HeartIcon isFavorite={true} isHovered={false} size={18} />);

		const icon = screen.getByLabelText('favorite-true');

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('width', '18');
		expect(icon).toHaveAttribute('height', '18');
		expect(icon.innerHTML).toContain('#EC1D24');
	});

	it('debe renderizar HeartFilled blanco si es favorito y está hovered', () => {
		render(<HeartIcon isFavorite={true} isHovered={true} />);

		const icon = screen.getByLabelText('favorite-true');

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute('width', '14');
		expect(icon.innerHTML).toContain('#FFFFFF');
	});
});
