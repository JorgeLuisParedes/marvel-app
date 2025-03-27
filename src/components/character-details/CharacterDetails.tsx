import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../api/marvelApi';
import { CharacterInfo } from './CharacterInfo';
import { CharacterTransformations } from './CharacterTransformations';

export const CharacterDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const {
		data: character,
		isLoading,
		error,
	} = useGetCharacterByIdQuery(id ?? '');

	if (isLoading)
		return <p className='mt-10 text-center'>Cargando personaje...</p>;
	if (error || !character)
		return <p className='mt-10 text-center'>Personaje no encontrado.</p>;

	return (
		<>
			<CharacterInfo character={character} />
			{character.transformations?.length > 0 && (
				<CharacterTransformations
					transformations={character.transformations}
				/>
			)}
		</>
	);
};
