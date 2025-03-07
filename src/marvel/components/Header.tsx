import { Link } from 'react-router-dom';
import { LogoMarvel, FullHeart } from '../../ui';

export const Header = () => {
	return (
		<>
			<nav className='bg-black fixed sm:relative w-full z-20 top-0 start-0 pt-4 pb-4 pl-10 pr-10 justify-between flex'>
				<Link to='/'>
					<LogoMarvel />
				</Link>
				<Link to='/character' className='flex items-center'>
					<FullHeart />
					<span className='text-white'>3</span>
				</Link>
			</nav>
		</>
	);
};
