import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCount, showAll, showFavorites } from '../../store';
import { usePulseOnIncrement } from '../../hooks';

import { LogoMarvel } from './logo';
import { FullHeart } from './icons';

export const Header: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const favoritesCount = useSelector(selectFavoritesCount);
	const animate = usePulseOnIncrement(favoritesCount);

	const handleShowAll = () => {
		dispatch(showAll());
		navigate('/');
	};

	const handleShowFavorites = () => {
		dispatch(showFavorites());
		navigate('/');
	};

	return (
		<nav className='fixed start-0 top-0 z-20 flex w-full justify-between border-b border-[#333333] bg-black pt-4 pr-10 pb-4 pl-10 sm:relative'>
			<div className='cursor-pointer' onClick={handleShowAll}>
				<LogoMarvel />
			</div>

			<div
				className='flex cursor-pointer items-center'
				onClick={handleShowFavorites}>
				<span className={animate ? 'animate-favorite-pulse' : ''}>
					<FullHeart />
				</span>
				<span className='ml-1 text-white'>{favoritesCount}</span>
			</div>
		</nav>
	);
};
