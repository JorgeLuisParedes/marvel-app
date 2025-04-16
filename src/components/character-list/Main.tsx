import { useState } from 'react';
import { FilterCharacter } from './FilterCharacter';
import { ListCharacters } from './ListCharacters';

export const Main: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [resultCount, setResultCount] = useState(0);

	return (
		<main className='mt-21 min-h-screen bg-white p-12 text-black sm:mt-0 dark:bg-zinc-900 dark:text-white'>
			<FilterCharacter
				setSearchTerm={setSearchTerm}
				resultCount={resultCount}
			/>
			<ListCharacters
				searchTerm={searchTerm}
				setResultCount={setResultCount}
			/>
		</main>
	);
};
