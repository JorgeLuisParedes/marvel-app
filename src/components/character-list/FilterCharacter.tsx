import { useSearchInput } from '../../hooks';
import { SearchIcon } from '../ui';

interface FilterCharacterProps {
	setSearchTerm: (term: string) => void;
	resultCount: number;
}

export const FilterCharacter: React.FC<FilterCharacterProps> = ({
	setSearchTerm,
	resultCount,
}) => {
	const { value, onChange } = useSearchInput(setSearchTerm);

	return (
		<form className='mx-auto'>
			<div className='relative mb-3'>
				<div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-0'>
					<SearchIcon className='h-4 w-4 text-black dark:text-white' />
				</div>

				<input
					type='search'
					id='filterInput'
					value={value}
					onChange={onChange}
					className='block w-full border-b border-black bg-transparent p-2 ps-8 text-black uppercase placeholder-gray-400 focus:outline-none dark:border-zinc-600 dark:text-white dark:placeholder-zinc-500'
					placeholder='Search a character...'
				/>
			</div>

			<div>
				<span className='uppercase'>
					{resultCount} {resultCount === 1 ? 'result' : 'results'}
				</span>
			</div>
		</form>
	);
};
