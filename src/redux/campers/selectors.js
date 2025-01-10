import { selectFilters } from "@/redux/filters/selectors";
import { createSelector } from 'reselect';

export const selectCampers = state => state.campers.items;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectFilters],
    (campers, filters) => {
        const { location, vehicleType, vehicleEquipment } = filters;
        
        return campers.filter(camper => (
            (!location || camper.location.includes(location)) &&
            (!vehicleType || camper.form === vehicleType) &&
            (!vehicleEquipment.length || vehicleEquipment.every(reqEquip =>
                camper.equipment.some(equip => equip.id === reqEquip)
            ))
        ));
    }
);
