import { useCharactersList } from '../../hooks';
import { Character } from './Character';
import { Character as CharacterType } from '../../types/CharacterTypes';
import { ErrorIcon, Message } from '../ui';

interface ListCharactersProps {
	searchTerm: string;
	setResultCount: (count: number) => void;
}

export const ListCharacters: React.FC<ListCharactersProps> = ({
	searchTerm,
	setResultCount,
}) => {
	const { filteredCharacters, error } = useCharactersList(
		searchTerm,
		setResultCount
	);

	if (error) {
		return (
			<Message
				title='Error'
				message='Ocurrió un problema al cargar los personajes.'
				icon={<ErrorIcon />}
			/>
		);
	}

	return (
		<div className='mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7'>
			{filteredCharacters.map((character: CharacterType, index) => (
				<Character
					key={character.id}
					id={character.id}
					image={character.image}
					name={character.name}
					delay={index * 0.05}
				/>
			))}
		</div>
	);
};
