import Input from '@/components/Input';
import FilterGroup from '@/components/FilterGroup';
import Button from '@/components/Button';

import useFilters from './useFilters';

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
	const {
		location,
		vehicleEquipmentFilters,
		vehicleTypeFilter,
		handleLocationChange,
		handleVehicleEquipmentChange,
		handleVehicleTypeChange,
		handleSearch,
	} = useFilters();

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
					activeFilterIds={vehicleEquipmentFilters}
				/>
				<FilterGroup
					title="Vehicle type"
					filters={vehicleTypes}
					onFilterChange={handleVehicleTypeChange}
					activeFilterIds={vehicleTypeFilter}
				/>
			</div>
			<Button onClick={handleSearch}>Search</Button>
		</div>
	);
};

export default Filters;
