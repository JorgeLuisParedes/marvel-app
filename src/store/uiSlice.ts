import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UIState {
	showFavoritesView: boolean;
}

const initialState: UIState = {
	showFavoritesView: false,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showFavorites: state => {
			state.showFavoritesView = true;
		},
		showAll: state => {
			state.showFavoritesView = false;
		},
	},
});

export const { showFavorites, showAll } = uiSlice.actions;

// Selector
export const selectShowFavoritesView = (state: RootState) =>
	state.ui.showFavoritesView;

export default uiSlice.reducer;
