import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Character } from './Character';
import { useGetCharactersQuery } from '../api/marvelApi';
import { Character as CharacterType } from '../types/CharacterTypes';
import { selectFavorites, toggleFavorite } from '../store/favoritesSlice';

interface ListCharactersProps {
	searchTerm: string;
	setResultCount: (count: number) => void;
	showFavoritesView: boolean;
}

export const ListCharacters: React.FC<ListCharactersProps> = ({
	searchTerm,
	setResultCount,
	showFavoritesView,
}) => {
	const dispatch = useDispatch();
	const { data, error, isLoading } = useGetCharactersQuery(null);
	const favorites = useSelector(selectFavorites);

	const baseList: CharacterType[] = showFavoritesView
		? favorites
		: data?.items || [];

	const filteredCharacters = baseList.filter(({ name }) =>
		name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const favoriteIds = new Set(favorites.map(char => char.id));

	useEffect(() => {
		if (!isLoading && !error) {
			setResultCount(filteredCharacters.length);
		}
	}, [filteredCharacters.length, setResultCount, isLoading, error]);

	if (isLoading && !showFavoritesView) return <p>Cargando personajes...</p>;
	if (error && !showFavoritesView) return <p>Error al obtener personajes.</p>;

	return (
		<div className='mt-7 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7'>
			{filteredCharacters.map(character => {
				const isFavorite = favoriteIds.has(character.id);

				const handleToggleFavorite = () => {
					dispatch(toggleFavorite(character));
				};

				return (
					<Character
						key={character.id}
						id={character.id}
						image={character.image}
						name={character.name}
						isFavorite={isFavorite}
						onToggleFavorite={handleToggleFavorite}
					/>
				);
			})}
		</div>
	);
};
