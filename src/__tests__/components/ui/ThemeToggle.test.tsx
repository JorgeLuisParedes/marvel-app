import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from 'components/ui';

describe('ThemeToggle', () => {
	beforeEach(() => {
		document.documentElement.classList.remove('dark');
	});

	it('muestra "Oscuro" si el modo inicial es claro', () => {
		render(<ThemeToggle />);
		expect(screen.getByRole('button')).toHaveTextContent('Oscuro');
	});

	it('muestra "Claro" si el modo inicial es oscuro', () => {
		document.documentElement.classList.add('dark');
		render(<ThemeToggle />);
		expect(screen.getByRole('button')).toHaveTextContent('Claro');
	});

	it('al hacer clic alterna el modo oscuro', () => {
		render(<ThemeToggle />);
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(btn).toHaveTextContent('Claro');
	});
});
