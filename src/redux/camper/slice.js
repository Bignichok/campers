import { createSlice } from '@reduxjs/toolkit';

import { getFormattedPrice, getCamperEquipment } from '@/utils';

import { fetchCamper } from './operations';

const initialState = {
	camper: null,
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




export const camperSlice = createSlice({
	name: 'contacts',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchCamper.pending, handlePending)
			.addCase(fetchCamper.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				const camper = action.payload;
				state.camper = {
					name: camper.name,
					gallery: camper.gallery,
					price: getFormattedPrice(camper.price),
					description: camper.description,
					rating: camper.rating,
					reviews: camper.reviews,
					location: camper.location,
					id: camper.id,
					equipment: getCamperEquipment(camper),
					details: {
						form: camper.form,
						length: camper.length,
						width: camper.width,
						height: camper.height,
						tank: camper.tank,
						consumption: camper.consumption,
					}
				};
			})
			.addCase(fetchCamper.rejected, handleRejected)
	},
});

export default camperSlice.reducer;
