import { FilterCharacter } from './FilterCharacter';
import { ListCharacters } from './ListCharacters';

export const Main = () => {
	return (
		<>
			<section className='p-12 mt-21 sm:mt-0'>
				<FilterCharacter />
				<ListCharacters />
			</section>
		</>
	);
};
