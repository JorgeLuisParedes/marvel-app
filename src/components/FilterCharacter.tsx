import { useState } from 'react';

interface FilterCharacterProps {
	setSearchTerm: (term: string) => void;
	resultCount: number;
}

export const FilterCharacter: React.FC<FilterCharacterProps> = ({
	setSearchTerm,
	resultCount,
}) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
		setSearchTerm(value);
	};

	return (
		<form className='mx-auto'>
			<div className='relative mb-3'>
				<div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-0'>
					<svg
						className='h-4 w-4 text-black'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 20'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</div>

				<input
					type='search'
					id='filterInput'
					value={inputValue}
					onChange={handleChange}
					className='block w-full border-b border-b-black p-2 ps-8 text-black uppercase placeholder-gray-400 focus:ring-0 focus:outline-none'
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
