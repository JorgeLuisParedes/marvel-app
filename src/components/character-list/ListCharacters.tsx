import { useCharactersList } from '../../hooks';
import { Character } from './Character';
import { Character as CharacterType } from '../../types/CharacterTypes';
import { Message } from '../ui';

interface ListCharactersProps {
	searchTerm: string;
	setResultCount: (count: number) => void;
}

export const ListCharacters: React.FC<ListCharactersProps> = ({
	searchTerm,
	setResultCount,
}) => {
	const { filteredCharacters, getIsFavorite, handleToggleFavorite, error } =
		useCharactersList(searchTerm, setResultCount);

	if (error)
		return (
			<Message
				title='Error'
				message='Ocurrió un problema al cargar los personajes.'
				icon={
					<svg
						width='100'
						height='100'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<circle cx='12' cy='12' r='10' fill='#EC1D24' />
						<path
							d='M12 7V13'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
						/>
						<circle cx='12' cy='17' r='1.5' fill='white' />
					</svg>
				}
			/>
		);

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
