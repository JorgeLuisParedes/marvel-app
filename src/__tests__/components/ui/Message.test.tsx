import { render, screen } from '@testing-library/react';
import { Message } from 'components/ui/Message';

describe('Message', () => {
	it('debe renderizar el título, mensaje y el ícono', () => {
		const IconMock = () => <span data-testid='icon'>🔥</span>;

		render(
			<Message title='Ups' message='Algo falló' icon={<IconMock />} />
		);

		expect(
			screen.getByRole('heading', { name: /Ups/i })
		).toBeInTheDocument();
		expect(screen.getByText('Algo falló')).toBeInTheDocument();
		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});
});
