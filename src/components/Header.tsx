import { useSelector } from 'react-redux';
import { selectFavoritesCount } from '../store/favoritesSlice';
import { LogoMarvel, FullHeart } from '../ui';
import { usePulseOnIncrement } from '../hooks';

interface HeaderProps {
	onToggleFavorites: (showFavorites: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleFavorites }) => {
	const favoritesCount = useSelector(selectFavoritesCount);
	const animate = usePulseOnIncrement(favoritesCount);

	return (
		<nav className='fixed start-0 top-0 z-20 flex w-full justify-between border-b border-[#333333] bg-black pt-4 pr-10 pb-4 pl-10 sm:relative'>
			<div
				className='cursor-pointer'
				onClick={() => onToggleFavorites(false)}>
				<LogoMarvel />
			</div>

			<div
				className='flex cursor-pointer items-center'
				onClick={() => onToggleFavorites(true)}>
				<span className={animate ? 'animate-favorite-pulse' : ''}>
					<FullHeart />
				</span>
				<span className='ml-1 text-white'>{favoritesCount}</span>
			</div>
		</nav>
	);
};
