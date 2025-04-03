import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createTestStore } from './createTestStore';
import { TestRootState } from './createTestStore';
import { EnhancedStore } from '@reduxjs/toolkit';

interface RenderWithStoreOptions extends Omit<RenderOptions, 'wrapper'> {
	preloadedState?: Partial<TestRootState>;
	store?: EnhancedStore;
	withRouter?: boolean;
}

export const renderWithStore = (
	ui: ReactElement,
	options: RenderWithStoreOptions = {}
) => {
	const {
		preloadedState,
		store,
		withRouter = false,
		...renderOptions
	} = options;

	const finalStore = store ?? createTestStore(preloadedState);

	const Wrapper = ({ children }: { children: React.ReactNode }) => {
		const content = <Provider store={finalStore}>{children}</Provider>;

		return withRouter ? (
			<MemoryRouter
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true,
				}}>
				{content}
			</MemoryRouter>
		) : (
			content
		);
	};

	return {
		store: finalStore,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
};
