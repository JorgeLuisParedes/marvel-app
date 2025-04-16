import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleTheme } from '../../store/themeSlice';

export const ThemeToggle: React.FC = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state: RootState) => state.theme.mode);

	const handleToggle = () => {
		dispatch(toggleTheme());
	};

	return (
		<button
			onClick={handleToggle}
			className='border-marvel text-marvel hover:bg-marvel ml-4 w-24 cursor-pointer border px-4 py-2 text-center text-sm uppercase hover:text-white'
			aria-label='Toggle dark mode'>
			{theme === 'dark' ? 'Claro' : 'Oscuro'}
		</button>
	);
};
