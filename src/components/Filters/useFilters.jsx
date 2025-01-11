import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import { setFilters, clearFilters } from '@/redux/filters/slice';

const useFilters = () => {
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const [location, setLocation] = useState(searchParams.get('location') || '');
	const [vehicleEquipmentFilters, setVehicleEquipmentFilters] = useState(
		searchParams.get('vehicleEquipment') ? searchParams.get('vehicleEquipment').split(',') : []
	);
	const [vehicleTypeFilter, setVehicleTypeFilter] = useState([
		searchParams.get('vehicleType') || '',
	]);

	useEffect(() => {
		dispatch(
			setFilters({
				location,
				vehicleType: vehicleTypeFilter[0],
				vehicleEquipment: vehicleEquipmentFilters,
			})
		);

		return () => dispatch(clearFilters());
	}, []);

	const handleLocationChange = useCallback(event => {
		setLocation(event.target.value);
	}, []);

	const handleVehicleEquipmentChange = useCallback(filterId => {
		setVehicleEquipmentFilters(prevFilters => {
			if (prevFilters.includes(filterId)) {
				return prevFilters.filter(id => id !== filterId);
			}
			return [...prevFilters, filterId];
		});
	}, []);

	const handleVehicleTypeChange = useCallback(filterId => {
		setVehicleTypeFilter(prevFilters => {
			if (prevFilters.includes(filterId)) {
				return [];
			}
			return [filterId];
		});
	}, []);

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

		setSearchParams(queryParams);
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
