import { Link } from 'react-router-dom';
import { Character as CharacterType } from '../../types/CharacterTypes';
import { useHover, useFavoriteCharacter } from '../../hooks';
import { HeartIcon } from '../ui';
import { motion } from 'motion/react';

interface CharacterProps extends CharacterType {
	className?: string;
	delay?: number;
}

export const Character: React.FC<CharacterProps> = ({
	id,
	image,
	name,
	className,
	delay = 0,
}) => {
	const { isHovered, bindHover } = useHover();
	const { isFavorite, handleToggleFavorite } = useFavoriteCharacter({
		id,
		name,
		image,
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay }}
			className={`group bg-black [clip-path:polygon(0_0,100%_0,100%_calc(100%-13px),calc(100%-7px)_100%,0_100%)] ${className} w-full`}
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
					onClick={handleToggleFavorite}
					className='z-10 cursor-pointer'>
					<HeartIcon isFavorite={isFavorite} isHovered={isHovered} />
				</button>

				<div className='bg-marvel absolute top-0 left-0 -z-10 h-1.5 w-full transition-[height] duration-300 ease-in-out group-hover:h-full'></div>
			</div>
		</motion.div>
	);
};
