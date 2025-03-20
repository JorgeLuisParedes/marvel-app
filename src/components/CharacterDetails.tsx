import { FullHeart } from '../ui';

export const CharacterDetails = () => {
	const items = Array.from({ length: 15 });
	return (
		<>
			<section className='bg-black'>
				<div className='mx-auto mt-[85px] w-full overflow-hidden text-white sm:mt-0 sm:max-w-5xl'>
					<div className='items-center sm:flex'>
						<div className='shrink-0'>
							<img
								className='mx-auto w-full sm:w-80'
								src='../src/assets/images/img-character.png'
								alt='Iron-man'
							/>
						</div>
						<div className='px-4 pt-6 pb-12 sm:px-10 lg:pr-0'>
							<div className='flex items-center justify-between'>
								<h1 className='text-4xl font-bold uppercase'>
									Iron-man
								</h1>
								<FullHeart />
							</div>
							<p className='mt-2'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Natus unde possimus libero
								tenetur nobis sit vitae odio totam est numquam
								repudiandae aut accusamus, incidunt ipsum nihil
								magnam veritatis. Cumque, harum.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='mx-auto py-12 sm:max-w-5xl'>
				<h2 className='px-4 text-[32px] font-bold uppercase sm:p-0'>
					Comics
				</h2>
				<div className='custom-scrollbar flex w-full gap-4 overflow-x-scroll bg-white p-4'>
					{items.map((_, index) => (
						<div key={index} className='min-w-44'>
							<img
								src='..\src\assets\images\img-comic.png'
								alt=''
							/>
							<h3 className='text-[16px] font-medium'>
								Lorem ipsum dolor sit amet consectetur
							</h3>
							<span className='mt-2 text-xs'>1967</span>
						</div>
					))}
				</div>
			</section>
		</>
	);
};
