import { useState } from 'react';
import { Header, Main } from '../components';

export const HomePage = () => {
	const [showFavoritesView, setShowFavoritesView] = useState(false);

	const handleToggleFavorites = (value: boolean) => {
		setShowFavoritesView(value);
	};

	return (
		<>
			<Header onToggleFavorites={handleToggleFavorites} />
			<Main showFavoritesView={showFavoritesView} />
		</>
	);
};
