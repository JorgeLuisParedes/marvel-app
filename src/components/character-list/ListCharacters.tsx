// 📁 src/components/character-list/ListCharacters.tsx

import { useCharactersList } from '../../hooks';
import { Character } from './Character';
import { Character as CharacterType } from '../../types/CharacterTypes';

interface ListCharactersProps {
	searchTerm: string;
	setResultCount: (count: number) => void;
}

export const ListCharacters: React.FC<ListCharactersProps> = ({
	searchTerm,
	setResultCount,
}) => {
	const {
		filteredCharacters,
		getIsFavorite,
		handleToggleFavorite,
		isLoading,
		error,
	} = useCharactersList(searchTerm, setResultCount);

	if (isLoading) return <p>Cargando personajes...</p>;
	if (error) return <p>Error al obtener personajes.</p>;

	return (
		<div className='mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7'>
			{filteredCharacters.map((character: CharacterType, index) => (
				<Character
					key={character.id}
					id={character.id}
					image={character.image}
					name={character.name}
					isFavorite={getIsFavorite(character.id)}
					onToggleFavorite={() => handleToggleFavorite(character)}
					delay={index * 0.05}
				/>
			))}
		</div>
	);
};
