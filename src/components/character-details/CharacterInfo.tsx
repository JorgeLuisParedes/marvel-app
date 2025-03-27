import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectFavorites } from '../../store/favoritesSlice';
import { CharacterDetails as CharacterType } from '../../types/CharacterTypes';

interface Props {
	character: CharacterType;
}

export const CharacterInfo: React.FC<Props> = ({ character }) => {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);
	const [isClicked, setIsClicked] = useState(false);

	const isFavorite = useMemo(() => {
		return favorites.some(fav => fav.id === character.id);
	}, [favorites, character.id]);

	const handleToggleFavorite = () => {
		dispatch(toggleFavorite(character));
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
								onClick={handleToggleFavorite}
								className={`transform cursor-pointer transition duration-300 ease-in-out ${
									isClicked ? 'scale-110 opacity-80' : ''
								}`}>
								{isFavorite ? (
									<svg
										width='24'
										height='22'
										viewBox='0 0 13 12'
										fill='none'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
											fill='#EC1D24'
										/>
									</svg>
								) : (
									<svg
										width='24'
										height='22'
										viewBox='0 0 15 14'
										fill='none'>
										<path
											d='M4.28564 1.55237L4.80449 0.697502L4.28564 0.382594L3.76679 0.697502L4.28564 1.55237ZM7.28564 3.37318L6.7668 4.22804L7.28564 4.54295L7.80449 4.22804L7.28564 3.37318ZM1.28564 3.37318L0.766795 2.51831L0.285645 2.81034V3.37318H1.28564ZM1.28564 7.27491H0.285645V7.73644L0.636848 8.03587L1.28564 7.27491ZM7.28564 12.3905L6.63685 13.1515L7.28564 13.7046L7.93444 13.1515L7.28564 12.3905ZM13.2856 7.27491L13.9344 8.03587L14.2856 7.73644V7.27491H13.2856ZM13.2856 3.37318H14.2856V2.81034L13.8045 2.51831L13.2856 3.37318ZM10.2856 1.55237L10.8045 0.697502L10.2856 0.382594L9.7668 0.697502L10.2856 1.55237ZM3.76679 2.40723L6.7668 4.22804L7.80449 2.51831L4.80449 0.697502L3.76679 2.40723ZM1.80449 4.22804L4.80449 2.40723L3.76679 0.697502L0.766795 2.51831L1.80449 4.22804ZM2.28564 7.27491V3.37318H0.285645V7.27491H2.28564ZM7.93444 11.6296L1.93444 6.51395L0.636848 8.03587L6.63685 13.1515L7.93444 11.6296ZM7.93444 13.1515L13.9344 8.03587L12.6368 6.51395L6.63685 11.6296L7.93444 13.1515ZM14.2856 7.27491V3.37318H12.2856V7.27491H14.2856ZM13.8045 2.51831L10.8045 0.697502L9.7668 2.40723L12.7668 4.22804L13.8045 2.51831ZM9.7668 0.697502L6.7668 2.51831L7.80449 4.22804L10.8045 2.40723L9.7668 0.697502Z'
											fill='white'
										/>
									</svg>
								)}
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
