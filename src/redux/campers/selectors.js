import { createSelector } from 'reselect';

import { selectFilters } from "@/redux/filters/selectors";
import { selectFavorites } from '@/redux/favorites/selectors';

export const selectCampers = state => state.campers.items;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectFilters, selectFavorites],
    (campers, filters, favorites) => {
        const { location, vehicleType, vehicleEquipment } = filters;

        return campers.filter(camper => (
            (!location || camper.location.includes(location)) &&
            (!vehicleType || camper.form === vehicleType) &&
            (!vehicleEquipment.length || vehicleEquipment.every(reqEquip =>
                camper.equipment.some(equip => equip.id === reqEquip)
            ))
        )).map(camper => ({
            ...camper,
            isFavorite: favorites.includes(camper.id)
        }));
    }
);
