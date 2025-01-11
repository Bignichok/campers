import { createAsyncThunk } from '@reduxjs/toolkit';

import campersApi from '@/services/campersApi';

export const fetchCamper = createAsyncThunk('campers/fetchCamper', async (id, thunkAPI) => {
	try {
		const response = await campersApi.get(`/campers/${id}`);
		
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
