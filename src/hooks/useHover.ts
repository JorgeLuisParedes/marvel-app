import { useState, useCallback } from 'react';

export const useHover = () => {
	const [isHovered, setIsHovered] = useState(false);

	const onMouseEnter = useCallback(() => setIsHovered(true), []);
	const onMouseLeave = useCallback(() => setIsHovered(false), []);

	return {
		isHovered,
		bindHover: {
			onMouseEnter,
			onMouseLeave,
		},
	};
};
