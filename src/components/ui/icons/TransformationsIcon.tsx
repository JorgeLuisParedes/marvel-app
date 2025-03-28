interface TransformationsIconProps {
	size?: number;
	color?: string;
}

export const TransformationsIcon: React.FC<TransformationsIconProps> = ({
	size = 40,
	color = '#EC1D24',
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M4 4H20V20H4V4Z'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
		<path
			d='M8 10H16'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
		<path
			d='M8 14H13'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
		/>
	</svg>
);
