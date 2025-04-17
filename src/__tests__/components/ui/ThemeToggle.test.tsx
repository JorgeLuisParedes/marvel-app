import { screen, fireEvent } from '@testing-library/react';
import { renderWithStore } from '../../utils/renderWithStore';
import { ThemeToggle } from 'components/ui';
import { ThemeState } from 'types/ThemeTypes';

describe('ThemeToggle', () => {
	const initialThemeState: ThemeState = { mode: 'light' };

	it('muestra "Oscuro" si el modo inicial es claro', () => {
		renderWithStore(<ThemeToggle />, {
			preloadedState: {
				theme: initialThemeState,
			},
		});
		expect(screen.getByRole('button')).toHaveTextContent('Oscuro');
	});

	it('muestra "Claro" si el modo inicial es oscuro', () => {
		renderWithStore(<ThemeToggle />, {
			preloadedState: {
				theme: { mode: 'dark' },
			},
		});
		expect(screen.getByRole('button')).toHaveTextContent('Claro');
	});

	it('al hacer clic alterna el modo oscuro', () => {
		const { store } = renderWithStore(<ThemeToggle />, {
			preloadedState: {
				theme: initialThemeState,
			},
		});
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		expect(store.getState().theme.mode).toBe('dark');
	});
});
