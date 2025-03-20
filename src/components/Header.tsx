import { Link } from 'react-router-dom';
import { LogoMarvel, FullHeart } from '../ui';

export const Header = () => {
	return (
		<>
			<nav className='fixed start-0 top-0 z-20 flex w-full justify-between border-b border-[#333333] bg-black pt-4 pr-10 pb-4 pl-10 sm:relative'>
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
