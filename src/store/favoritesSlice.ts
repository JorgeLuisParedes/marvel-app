import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'types/CharacterTypes';
import { RootState } from './store';

export interface FavoritesState {
	favorites: Character[];
}

const initialState: FavoritesState = {
	favorites: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Character>) => {
			const exists = state.favorites.some(
				char => char.id === action.payload.id
			);
			if (!exists) {
				state.favorites.push(action.payload);
			}
		},
		removeFavorite: (state, action: PayloadAction<number>) => {
			state.favorites = state.favorites.filter(
				char => char.id !== action.payload
			);
		},
		toggleFavorite: (state, action: PayloadAction<Character>) => {
			const exists = state.favorites.some(
				char => char.id === action.payload.id
			);
			if (exists) {
				state.favorites = state.favorites.filter(
					char => char.id !== action.payload.id
				);
			} else {
				state.favorites.push(action.payload);
			}
		},
	},
});

export const { addFavorite, removeFavorite, toggleFavorite } =
	favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const selectIsFavorite = (state: RootState, id: number) =>
	state.favorites.favorites.some(char => char.id === id);

export const selectFavoritesCount = (state: RootState) =>
	state.favorites.favorites.length;

export default favoritesSlice.reducer;
