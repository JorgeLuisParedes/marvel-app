import { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Inicialmente detecta si el tema actual es oscuro
		const hasDarkClass =
			document.documentElement.classList.contains('dark');
		setIsDark(hasDarkClass);
	}, []);

	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark');
		setIsDark(prev => !prev);
	};

	return (
		<button
			onClick={toggleTheme}
			className='ml-4 text-white transition-colors duration-200 hover:text-yellow-300'
			aria-label='Toggle dark mode'>
			{isDark ? '☀️' : '🌙'}
		</button>
	);
};
