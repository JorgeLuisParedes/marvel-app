import { HeartFilled, HeartOutlined } from './icons';

interface HeartIconProps {
	isFavorite: boolean;
	isHovered?: boolean;
	size?: number;
}

export const HeartIcon: React.FC<HeartIconProps> = ({
	isFavorite,
	isHovered = false,
	size = 14,
}) => {
	if (!isFavorite) return <HeartOutlined size={size} />;

	const color = isHovered ? '#FFFFFF' : '#EC1D24';
	return <HeartFilled color={color} size={size} />;
};
