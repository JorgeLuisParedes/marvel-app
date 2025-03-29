import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showAll, showFavorites } from '../store';

export const useFavoritesNavigation = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const showAllCharacters = () => {
		dispatch(showAll());
		navigate('/');
	};

	const showFavoriteCharacters = () => {
		dispatch(showFavorites());
		navigate('/');
	};

	return {
		showAllCharacters,
		showFavoriteCharacters,
	};
};
