import { createSelector } from 'reselect';

import { selectFilters } from '@/redux/filters/selectors';

export const selectCampers = state => state.campers.items;

export const selectFilteredCampers = createSelector(
	[selectCampers, selectFilters],
	(campers, filters) => {
		const { location, vehicleType, vehicleEquipment } = filters;

		return campers.filter(
			camper =>
				(!location || camper.location.toLowerCase().includes(location.toLowerCase())) &&
				(!vehicleType || camper.form === vehicleType) &&
				(!vehicleEquipment.length ||
					vehicleEquipment.every(reqEquip =>
						camper.equipment.some(equip => equip.id === reqEquip)
					))
		);
	}
);

export const selectCampersLoading = state => state.campers.isLoading;

export const selectCampersError = state => state.campers.error;
