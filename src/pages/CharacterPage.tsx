import { CharacterDetails, Header, TopProgressBar } from '../components';

export const CharacterPage = () => {
	return (
		<div className='min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white'>
			<TopProgressBar />
			<Header />
			<CharacterDetails />
		</div>
	);
};
