import React from 'react';

// ⚠️ Este archivo solo exporta el componente, para que Fast Refresh no se queje
export const MockLoadingBar = React.forwardRef(() => {
	return <div data-testid='progress-bar' />;
});
