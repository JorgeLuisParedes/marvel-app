import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../api/marvelApi';
import { CharacterInfo } from './CharacterInfo';
import { CharacterTransformations } from './CharacterTransformations';
import { motion } from 'framer-motion';

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
		<motion.div
			initial={{ opacity: 0, y: -30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeIn' }}>
			<CharacterInfo character={character} />
			<CharacterTransformations
				transformations={character.transformations}
			/>
		</motion.div>
	);
};
