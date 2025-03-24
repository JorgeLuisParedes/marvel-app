import { Link } from 'react-router-dom';
import { Character as CharacterType } from '../types/CharacterTypes';
import { useHover } from '../hooks';
import { HeartIcon } from '../ui';

interface CharacterProps extends CharacterType {
	isFavorite: boolean;
	onToggleFavorite: () => void;
}

export const Character: React.FC<CharacterProps> = ({
	id,
	image,
	name,
	isFavorite,
	onToggleFavorite,
}) => {
	const { isHovered, bindHover } = useHover();

	return (
		<div
			className='group bg-black [clip-path:polygon(0_0,100%_0,100%_95%,93%_100%,100%_100%,0_100%)]'
			{...bindHover}>
			<Link to={`/character/${id}`}>
				<div className='flex h-56 items-center justify-center py-6'>
					<img
						className='h-full w-full object-contain'
						src={image}
						alt={name}
						loading='lazy'
					/>
				</div>
			</Link>

			<div className='relative flex items-center justify-between p-4 pb-6'>
				<span className='text-white uppercase'>{name}</span>

				<button
					onClick={onToggleFavorite}
					className='z-10 cursor-pointer'>
					<HeartIcon isFavorite={isFavorite} isHovered={isHovered} />
				</button>

				<div className='bg-marvel absolute top-0 left-0 -z-10 h-1.5 w-full transition-[height] duration-300 ease-in-out group-hover:h-full'></div>
			</div>
		</div>
	);
};
