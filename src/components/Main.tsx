import { FilterCharacter } from './FilterCharacter';
import { ListCharacters } from './ListCharacters';

export const Main = () => {
	return (
		<>
			<section className='mt-21 p-12 sm:mt-0'>
				<FilterCharacter />
				<ListCharacters />
			</section>
		</>
	);
};
