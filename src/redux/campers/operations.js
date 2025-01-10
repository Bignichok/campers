import { createAsyncThunk } from '@reduxjs/toolkit';

import campersApi from '@/services/campersApi';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async (_, thunkAPI) => {
	try {
		const response = await campersApi.get('/campers');
		
		return response.data;
	} catch (e) {
		return thunkAPI.rejectWithValue(e.message);
	}
});
