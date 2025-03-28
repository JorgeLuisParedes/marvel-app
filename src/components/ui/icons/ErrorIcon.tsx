export const ErrorIcon: React.FC<{ size?: number }> = ({ size = 100 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<circle cx='12' cy='12' r='10' fill='#EC1D24' />
			<path
				d='M12 7V13'
				stroke='white'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<circle cx='12' cy='17' r='1.5' fill='white' />
		</svg>
	);
};
