import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from './operations';

const initialState = {
	items: [],
	loading: false,
	error: null,
};

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const categories = [
	{ id: 'transmission', iconName: 'gearbox' },
	{ id: 'AC', name: 'AC', iconName: 'wind' },
	{ id: 'engine', iconName: 'gas-station' },
	{ id: 'kitchen', name: 'Kitchen', iconName: 'cup-hot' },
	{ id: 'radio', name: 'Radio', iconName: 'radio' },
	{ id: 'bathroom', name: 'Bathroom', iconName: 'shower' },
	{ id: 'refrigerator', name: 'Refrigerator', iconName: 'fridge' },
	{ id: 'microwave', name: 'Microwave', iconName: 'microwave' },
	{ id: 'gas', name: 'Gas', iconName: 'gas' },
	{ id: 'water', name: 'Water', iconName: 'water' },
	{ id: 'TV', name: 'TV', iconName: 'tv' },
];

export const campersSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchCampers.pending, handlePending)
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload.items.map(item => {

					return {
						name: item.name,
						imageUrl: item.gallery[0].thumb,
						price: item.price,
						description: item.description,
						rating: item.rating,
						reviews: item.reviews.length,
						location: item.location,
						id: item.id,
						equipment: categories.reduce((acc, category) => { 
							if (item[category.id]) {
								acc.push({
									id: category.id,
									name: category.name || item[category.id],
									iconName: category.iconName,
								});
							}
							
							return acc;
						},[]),
					}
				});
			})
			.addCase(fetchCampers.rejected, handleRejected)
	},
});

export default campersSlice.reducer;
