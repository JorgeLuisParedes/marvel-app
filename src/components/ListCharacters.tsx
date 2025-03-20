import { Character } from './Character';
import { useGetCharactersQuery } from '../api/marvelApi';
import { Character as CharacterType } from '../types/CharacterTypes';

export const ListCharacters: React.FC = () => {
	const { data, error, isLoading } = useGetCharactersQuery(null);

	if (isLoading) return <p>Cargando personajes...</p>;
	if (error) return <p>Error al obtener personajes.</p>;

	return (
		<>
			<div className='mt-7 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7'>
				{data.items.map(({ id, image, name }: CharacterType) => (
					<Character key={id} id={id} image={image} name={name} />
				))}
			</div>
		</>
	);
};
