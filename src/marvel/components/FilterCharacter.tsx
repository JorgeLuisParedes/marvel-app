export const FilterCharacter = () => {
	return (
		<>
			<div className='mx-12 mt-35'>
				<form className='mx-auto'>
					<div className='relative'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-0 pointer-events-none'>
							<svg
								className='w-4 h-4 text-black'
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
							className='block w-full p-2 ps-8 uppercase border-b-black border-b placeholder-gray-400 text-black focus:ring-0 focus:outline-none'
							placeholder='Search a character...'
						/>
					</div>
				</form>
			</div>
		</>
	);
};
