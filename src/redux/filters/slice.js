import { createSlice } from '@reduxjs/toolkit';

const queryParams = new URLSearchParams(window.location.search);

const initialState = {
	location: queryParams.get('location') || '',
	vehicleType: queryParams.get('vehicleType') || '',
	vehicleEquipment: queryParams.get('vehicleEquipment') ? queryParams.get('vehicleEquipment').split(',') : [],
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters: (state, action) => {
			state.location = action.payload.location;
			state.vehicleType = action.payload.vehicleType;
			state.vehicleEquipment = action.payload.vehicleEquipment;
		},
	},
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
