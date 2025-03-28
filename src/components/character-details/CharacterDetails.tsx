import { useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../api/marvelApi';
import { CharacterInfo } from './CharacterInfo';
import { CharacterTransformations } from './CharacterTransformations';
import { Message } from '../ui';
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
				icon={
					<svg
						width='40'
						height='40'
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
