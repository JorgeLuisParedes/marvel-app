import { Character } from './Character';
import { Character as CharacterType } from '../types/CharacterTypes';
import { useCharactersList } from '../hooks';

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
	const {
		filteredCharacters,
		getIsFavorite,
		handleToggleFavorite,
		isLoading,
		error,
	} = useCharactersList(searchTerm, showFavoritesView, setResultCount);

	if (isLoading && !showFavoritesView) return <p>Cargando personajes...</p>;
	if (error && !showFavoritesView) return <p>Error al obtener personajes.</p>;

	return (
		<div className='mt-7 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7'>
			{filteredCharacters.map((character: CharacterType) => (
				<Character
					key={character.id}
					id={character.id}
					image={character.image}
					name={character.name}
					isFavorite={getIsFavorite(character.id)}
					onToggleFavorite={() => handleToggleFavorite(character)}
				/>
			))}
		</div>
	);
};
