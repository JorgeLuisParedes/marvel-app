import { useSelector } from 'react-redux';
import { selectFavoritesCount } from '../../store';
import { usePulseOnIncrement, useFavoritesNavigation } from '../../hooks';

import { LogoMarvel } from './logo';
import { FullHeart } from './icons';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
	const favoritesCount = useSelector(selectFavoritesCount);
	const animate = usePulseOnIncrement(favoritesCount);
	const { showAllCharacters, showFavoriteCharacters } =
		useFavoritesNavigation();

	return (
		<nav className='fixed start-0 top-0 z-20 flex w-full justify-between border-b border-[#333333] bg-black pt-4 pr-10 pb-4 pl-10 sm:relative'>
			<div className='cursor-pointer' onClick={showAllCharacters}>
				<LogoMarvel />
			</div>

			<div className='flex items-center gap-4'>
				<div
					className='flex cursor-pointer items-center'
					onClick={showFavoriteCharacters}>
					<span className={animate ? 'animate-favorite-pulse' : ''}>
						<FullHeart />
					</span>
					<span className='ml-1 text-white'>{favoritesCount}</span>
				</div>

				<ThemeToggle />
			</div>
		</nav>
	);
};
