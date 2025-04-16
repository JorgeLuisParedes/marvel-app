import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

import { AppRouter } from './router/AppRouter';
import '@fontsource/roboto-condensed/400.css';
import '@fontsource/roboto-condensed/500.css';
import '@fontsource/roboto-condensed/700.css';

export const MarvelApp = () => {
	const theme = useSelector((state: RootState) => state.theme.mode);

	useEffect(() => {
		const root = document.documentElement.classList;
		if (theme === 'dark') {
			root.add('dark');
		} else {
			root.remove('dark');
		}
	}, [theme]);

	return <AppRouter />;
};
