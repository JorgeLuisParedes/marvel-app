import themeReducer, { toggleTheme, setTheme } from 'store/themeSlice';
import { ThemeState } from 'types/ThemeTypes';

const INIT_ACTION = { type: '@@INIT' };

describe('themeSlice', () => {
	it('debería retornar el estado inicial', () => {
		const initialState = themeReducer(undefined, INIT_ACTION);
		expect(initialState).toEqual({ mode: 'light' });
	});

	it('debería cambiar de light a dark con toggleTheme', () => {
		const prevState: ThemeState = { mode: 'light' };
		const newState = themeReducer(prevState, toggleTheme());
		expect(newState.mode).toBe('dark');
	});

	it('debería cambiar de dark a light con toggleTheme', () => {
		const prevState: ThemeState = { mode: 'dark' };
		const newState = themeReducer(prevState, toggleTheme());
		expect(newState.mode).toBe('light');
	});

	it('debería establecer dark con setTheme', () => {
		const prevState: ThemeState = { mode: 'light' };
		const newState = themeReducer(prevState, setTheme('dark'));
		expect(newState.mode).toBe('dark');
	});

	it('debería establecer light con setTheme', () => {
		const prevState: ThemeState = { mode: 'dark' };
		const newState = themeReducer(prevState, setTheme('light'));
		expect(newState.mode).toBe('light');
	});
});
