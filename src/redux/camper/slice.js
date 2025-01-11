import { createSlice } from '@reduxjs/toolkit';

import { getFormattedPrice, getCamperEquipment, formatFormField } from '@/utils';

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
					details: [
						{ id: 'form', title: 'Form', value: formatFormField(camper.form) },
						{ id: 'length', title: 'Length', value: camper.length },
						{ id:'width', title: 'Width', value: camper.width },
						{ id: 'height', title: 'Height', value: camper.height },
						{ id: 'tank', title: 'Tank', value: camper.tank },
						{ id: 'consumption', title: 'Consumption', value: camper.consumption }
					],
				};
			})
			.addCase(fetchCamper.rejected, handleRejected)
	},
});

export default camperSlice.reducer;
