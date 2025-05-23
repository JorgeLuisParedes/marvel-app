interface HeartFilledProps {
	color?: string;
	size?: number;
	'aria-label'?: string;
}

export const HeartFilled: React.FC<HeartFilledProps> = ({
	color = '#EC1D24',
	size = 14,
	'aria-label': ariaLabel,
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 13 12'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-label={ariaLabel}>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.57153 2.37318L3.57153 0.552368L0.571533 2.37318V6.27491L6.57153 11.3905L12.5715 6.27491V2.37318L9.57154 0.552368L6.57153 2.37318Z'
			fill={color}
		/>
	</svg>
);
