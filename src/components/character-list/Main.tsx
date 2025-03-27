import { useState } from 'react';
import { FilterCharacter } from './FilterCharacter';
import { ListCharacters } from './ListCharacters';

export const Main: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [resultCount, setResultCount] = useState(0);

	return (
		<section className='mt-21 p-12 sm:mt-0'>
			<FilterCharacter
				setSearchTerm={setSearchTerm}
				resultCount={resultCount}
			/>
			<ListCharacters
				searchTerm={searchTerm}
				setResultCount={setResultCount}
			/>
		</section>
	);
};
