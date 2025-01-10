import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setFilters } from '@/redux/filters/slice';
import { selectFilters } from '@/redux/filters/selectors';

const useFilters = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const filters = useSelector(selectFilters);

	const [location, setLocation] = useState(filters.location);
	const [vehicleEquipmentFilters, setVehicleEquipmentFilters] = useState(
		filters.vehicleEquipment
	);
	const [vehicleTypeFilter, setVehicleTypeFilter] = useState([filters.vehicleType]);

	const handleLocationChange = event => {
		setLocation(event.target.value);
	};

	const handleVehicleEquipmentChange = filterId => {
		setVehicleEquipmentFilters(prevFilters => {
			if (prevFilters.includes(filterId)) {
				return prevFilters.filter(id => id !== filterId);
			}
			return [...prevFilters, filterId];
		});
	};

	const handleVehicleTypeChange = filterId => {
		setVehicleTypeFilter(prevFilters => {
			if (prevFilters.includes(filterId)) {
				return [];
			}
			return [filterId];
		});
	};

	const handleSearch = () => {
		dispatch(
			setFilters({
				location,
				vehicleType: vehicleTypeFilter[0],
				vehicleEquipment: vehicleEquipmentFilters,
			})
		);

		const queryParams = new URLSearchParams();
		if (location) {
			queryParams.set('location', location);
		}
		if (vehicleTypeFilter[0]) {
			queryParams.set('vehicleType', vehicleTypeFilter[0]);
		}
		if (vehicleEquipmentFilters.length > 0) {
			queryParams.set('vehicleEquipment', vehicleEquipmentFilters.join(','));
		}

		navigate({ search: queryParams.toString() });
	};

	return {
		location,
		vehicleEquipmentFilters,
		vehicleTypeFilter,
		handleLocationChange,
		handleVehicleEquipmentChange,
		handleVehicleTypeChange,
		handleSearch,
	};
};

export default useFilters;
