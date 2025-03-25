import { useEffect, useRef, useState } from 'react';

export const usePulseOnIncrement = (value: number, duration = 600) => {
	const [animate, setAnimate] = useState(false);
	const previous = useRef(value);

	useEffect(() => {
		if (value > previous.current) {
			setAnimate(true);
			const timeout = setTimeout(() => setAnimate(false), duration);
			return () => clearTimeout(timeout);
		}
		previous.current = value;
	}, [value, duration]);

	return animate;
};
