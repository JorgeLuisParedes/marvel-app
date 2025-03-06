import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, CharacterPage } from '../pages';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/character/' element={<CharacterPage />} />

				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</>
	);
};
