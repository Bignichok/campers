import { useState } from 'react';

import Input from '@/components/Input';
import FilterGroup from '@/components/FilterGroup';
import Button from '@/components/Button';

import css from './Filters.module.css';

const vehicleEquipment = [
	{ id: 'AC', name: 'AC', iconName: 'wind' },
	{ id: 'transmission', name: 'Automatic', iconName: 'gearbox' },
	{ id: 'kitchen', name: 'Kitchen', iconName: 'cup-hot' },
	{ id: 'TV', name: 'TV', iconName: 'tv' },
	{ id: 'bathroom', name: 'Bathroom', iconName: 'shower' },
];

const vehicleTypes = [
	{ id: 'panelTruck', name: 'Van', iconName: 'grid-1x2' },
	{ id: 'fullyIntegrated', name: 'Fully Integrated', iconName: 'grid-2x2' },
	{ id: 'alcove', name: 'Alcove', iconName: 'grid-3x3' },
];

const Filters = () => {
	const [location, setLocation] = useState('');

	const handleLocationChange = event => {
		setLocation(event.target.value);
	};

	const handleVehicleEquipmentChange = filterId => {
		console.log('handleVehicleEquipmentChange', filterId);
	};

	const handleVehicleTypeChange = filterId => {
		console.log('handleVehicleTypesChange', filterId);
	};

	const handleSearch = () => {
		console.log('handleSearch');
	};

	return (
		<div>
			<div className={css.locationFilterHolder}>
				<Input
					iconName="map"
					label="Location"
					placeholder="City"
					value={location}
					onChange={handleLocationChange}
				/>
			</div>
			<p className={css.filtersTitle}>Filters</p>
			<div className={css.filtersHolder}>
				<FilterGroup
					title="Vehicle equipment"
					filters={vehicleEquipment}
					onFilterChange={handleVehicleEquipmentChange}
					activeFilterIds={[]}
				/>
				<FilterGroup
					title="Vehicle type"
					filters={vehicleTypes}
					onFilterChange={handleVehicleTypeChange}
					activeFilterIds={[]}
				/>
			</div>
			<Button onClick={handleSearch}>Search</Button>
		</div>
	);
};

export default Filters;
