import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MarvelApp } from './MarvelApp';
import './styles.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<MarvelApp />
		</BrowserRouter>
	</StrictMode>
);
