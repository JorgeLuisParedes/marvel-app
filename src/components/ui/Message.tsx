interface MessageProps {
	title: string;
	message: string;
	icon: React.ReactNode;
}

export const Message: React.FC<MessageProps> = ({ title, message, icon }) => {
	return (
		<div className='flex flex-col items-center justify-center py-12 text-center text-black'>
			{icon && <div className='mb-4'>{icon}</div>}

			<h2 className='text-2xl font-bold uppercase'>{title}</h2>
			<p className='mt-2 text-sm text-black sm:text-base'>{message}</p>
		</div>
	);
};
