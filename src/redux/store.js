import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';

import filtersReducer from './filters/slice';
import camperReducer from './camper/slice';
import campersReducer from './campers/slice';
import favoritesReducer from './favorites/slice';

const rootReducer = combineReducers({
	filters: filtersReducer,
	camper: camperReducer,
	campers: campersReducer,
	favorites: favoritesReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
