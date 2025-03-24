import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetCharactersQuery } from '../api/marvelApi';
import { selectFavorites, toggleFavorite } from '../store/favoritesSlice';
import { Character } from '../types/CharacterTypes';

export const useCharactersList = (
	searchTerm: string,
	showFavoritesView: boolean,
	setResultCount: (count: number) => void
) => {
	const dispatch = useDispatch();
	const { data, error, isLoading } = useGetCharactersQuery(null);
	const favorites = useSelector(selectFavorites);

	const filteredCharacters = useMemo(() => {
		const baseList: Character[] = showFavoritesView
			? favorites
			: data?.items || [];

		return baseList.filter(({ name }) =>
			name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [favorites, data?.items, searchTerm, showFavoritesView]);

	const favoriteIds = useMemo(
		() => new Set(favorites.map(char => char.id)),
		[favorites]
	);

	useEffect(() => {
		if (!isLoading && !error) {
			setResultCount(filteredCharacters.length);
		}
	}, [filteredCharacters.length, isLoading, error, setResultCount]);

	const getIsFavorite = (id: number) => favoriteIds.has(id);

	const handleToggleFavorite = (character: Character) => {
		dispatch(toggleFavorite(character));
	};

	return {
		filteredCharacters,
		getIsFavorite,
		handleToggleFavorite,
		isLoading,
		error,
	};
};
