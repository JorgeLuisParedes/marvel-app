import { useEffect, useRef, useState } from 'react';

export const usePulseOnIncrement = (value: number, duration = 600) => {
	const [animate, setAnimate] = useState(false);
	const previous = useRef(value);

	useEffect(() => {
		let isMounted = true;
		if (value > previous.current) {
			setAnimate(true);
			const timeout = setTimeout(() => {
				if (isMounted) {
					setAnimate(false);
				}
			}, duration);
			return () => {
				isMounted = false;
				clearTimeout(timeout);
			};
		}
		previous.current = value;
	}, [value, duration]);

	return animate;
};
