import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { toggleFavorite, selectFavorites } from '../store/favoritesSlice';
import { Character } from '../types/CharacterTypes';

export const useFavoriteCharacter = (character: Character) => {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);

	const isFavorite = useMemo(() => {
		return favorites.some(fav => fav.id === character.id);
	}, [favorites, character.id]);

	const handleToggleFavorite = () => {
		dispatch(toggleFavorite(character));
	};

	return { isFavorite, handleToggleFavorite };
};
