import { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
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
			className='border-marvel text-marvel hover:bg-marvel ml-4 w-24 cursor-pointer border px-4 py-2 text-center text-sm uppercase hover:text-white'
			aria-label='Toggle dark mode'>
			{isDark ? 'Claro' : 'Oscuro'}
		</button>
	);
};
