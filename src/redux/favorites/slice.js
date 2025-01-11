import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setFavorites: (state, action) => {
			const favoriteId = action.payload;
			if (state.items.includes(favoriteId)) {
				state.items = state.items.filter(item => item !== favoriteId);
			} else {
				state.items.push(favoriteId)
			}
		},
	},
});

export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
