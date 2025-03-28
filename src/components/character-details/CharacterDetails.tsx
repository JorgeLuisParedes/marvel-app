import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../api/marvelApi';
import { CharacterInfo } from './CharacterInfo';
import { CharacterTransformations } from './CharacterTransformations';
import { ErrorIcon, Message } from '../ui';
import { motion } from 'motion/react';

export const CharacterDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const {
		data: character,
		isLoading,
		error,
	} = useGetCharacterByIdQuery(id ?? '');

	if (!isLoading && (error || !character)) {
		return (
			<Message
				title='Personaje no encontrado'
				message='Ocurrió un error al obtener los datos del personaje.'
				icon={<ErrorIcon />}
			/>
		);
	}

	return (
		<>
			{character && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<CharacterInfo character={character} />
					<CharacterTransformations
						transformations={character.transformations}
					/>
				</motion.div>
			)}
		</>
	);
};
