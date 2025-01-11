import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	location: '',
	vehicleType: '',
	vehicleEquipment: [],
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
		clearFilters: state => {
			state.location = initialState.location;
			state.vehicleType = initialState.vehicleType;
			state.vehicleEquipment = initialState.vehicleEquipment;
		}
	}
});

export const { setFilters, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
