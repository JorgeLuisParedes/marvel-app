import { useState } from 'react';
import { CharacterDetails as CharacterType } from '../../types/CharacterTypes';
import { HeartIcon } from '../ui';
import { useFavoriteCharacter } from '../../hooks';

interface Props {
	character: CharacterType;
}

export const CharacterInfo: React.FC<Props> = ({ character }) => {
	const [isClicked, setIsClicked] = useState(false);
	const { isFavorite, handleToggleFavorite } =
		useFavoriteCharacter(character);

	const handleClick = () => {
		handleToggleFavorite();
		setIsClicked(true);
		setTimeout(() => setIsClicked(false), 300);
	};

	return (
		<section className='bg-black py-10 [clip-path:polygon(0_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%)]'>
			<div className='mx-auto mt-[85px] w-full overflow-hidden px-4 text-white sm:mt-0 sm:max-w-5xl'>
				<div className='flex flex-col items-center gap-6 sm:flex-row sm:items-center'>
					<div className='shrink-0'>
						<img
							className='mx-auto h-80 w-80 object-contain sm:h-96 sm:w-96'
							src={character.image}
							alt={character.name}
						/>
					</div>
					<div className='flex w-full flex-col justify-center sm:px-6 lg:pr-0'>
						<div className='flex items-center justify-between'>
							<h1 className='text-3xl font-bold uppercase sm:text-4xl'>
								{character.name}
							</h1>
							<button
								onClick={handleClick}
								className={`transform cursor-pointer transition duration-300 ease-in-out ${
									isClicked ? 'scale-110 opacity-80' : ''
								}`}>
								<HeartIcon isFavorite={isFavorite} size={24} />
							</button>
						</div>
						<p className='mt-2 text-sm sm:text-base'>
							{character.description ||
								'Sin descripción disponible.'}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
