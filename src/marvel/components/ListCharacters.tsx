import { Character } from './Character';

export const ListCharacters = () => {
	return (
		<>
			<div className='mt-7 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7'>
				<Character />
				{/* <div className='group bg-black [clip-path:polygon(0_0,100%_0,100%_95%,93%_100%,100%_100%,0_100%)]'>
					<div>
						<img
							className='w-full object-cover'
							src='src\assets\images\img-1.jpg'
						/>
					</div>
					<div className='relative p-4 pb-6 flex items-center justify-between'>
						<span className='text-white'>IRON MAN</span>
						<div>
							<svg
								width='13'
								height='12'
								viewBox='0 0 13 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
									fill='white'
								/>
							</svg>
						</div>
						<div className='absolute -z-10 w-full h-1.5 bg-marvel top-0 left-0 group-hover:h-full transition-[height] duration-300 ease-in-out'></div>
					</div>
				</div> */}
				{/* <div className='group bg-black [clip-path:polygon(0_0,100%_0,100%_95%,93%_100%,100%_100%,0_100%)]'>
					<div>
						<img
							className='w-full object-cover'
							src='src\assets\images\img-1.jpg'
						/>
					</div>
					<div className='relative p-4 pb-6 flex items-center justify-between'>
						<span className='text-white'>IRON MAN</span>
						<div>
							<svg
								width='13'
								height='12'
								viewBox='0 0 13 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
									fill='#EC1D24'
								/>
							</svg>
						</div>
						<div className='absolute -z-10 w-full h-1.5 bg-marvel top-0 left-0 group-hover:h-full transition-[height] duration-300 ease-in-out'></div>
					</div>
				</div> */}
			</div>
		</>
	);
};
