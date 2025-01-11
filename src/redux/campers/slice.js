import { createSlice } from '@reduxjs/toolkit';

import { getFormattedPrice, getCamperEquipment } from '@/utils';

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

export const campersSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchCampers.pending, handlePending)
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				
				state.items = action.payload.items.map(item => ({
					name: item.name,
					imageUrl: item.gallery[0].thumb,
					price: getFormattedPrice(item.price),
					description: item.description,
					rating: item.rating,
					reviews: item.reviews.length,
					location: item.location,
					id: item.id,
					form: item.form,
					equipment: getCamperEquipment(item),
				}));
			})
			.addCase(fetchCampers.rejected, handleRejected)
	},
});

export default campersSlice.reducer;
