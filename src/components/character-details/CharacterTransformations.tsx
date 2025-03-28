import { Transformation } from '../../types/CharacterTypes';
import { Message } from '../ui';

interface Props {
	transformations: Transformation[];
}

export const CharacterTransformations: React.FC<Props> = ({
	transformations,
}) => {
	return (
		<section className='mx-auto py-12 sm:max-w-5xl'>
			<h2 className='px-4 text-[32px] font-bold uppercase sm:p-0'>
				Transformaciones
			</h2>

			{transformations.length === 0 ? (
				<Message
					title='Sin transformaciones'
					message='Este personaje no tiene transformaciones disponibles.'
					icon={
						<svg
							width='40'
							height='40'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M4 4H20V20H4V4Z'
								stroke='#EC1D24'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<path
								d='M8 10H16'
								stroke='#EC1D24'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<path
								d='M8 14H13'
								stroke='#EC1D24'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					}
				/>
			) : (
				<div className='relative'>
					<div className='custom-scrollbar flex w-full gap-4 overflow-x-scroll scroll-smooth bg-white p-4'>
						{transformations.map(trans => (
							<div key={trans.id} className='min-w-44'>
								<div className='flex h-40 w-full items-center justify-center overflow-hidden'>
									<img
										src={trans.image}
										alt={trans.name}
										className='h-full object-contain'
									/>
								</div>
								<h3 className='mt-2 text-[16px] font-medium'>
									{trans.name}
								</h3>
								<span className='text-xs'>Ki: {trans.ki}</span>
							</div>
						))}
					</div>
				</div>
			)}
		</section>
	);
};
