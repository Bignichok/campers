import css from './VehicleDetails.module.css';

import EquipmentList from '@/components/EquipmentList';

const VehicleDetails = ({ equipment, details }) => {
	return (
		<div className={css.container}>
			<div className={css.listHolder}>
				<EquipmentList equipment={equipment} secondary />
			</div>
			<div>
				<h3 className={css.title}>Vehicle details</h3>
				<ul className={css.list}>
					{details?.length > 0 &&
						details.map(({ id, title, value }) => (
							<li key={id}>
								<span>{title}</span>
								<span>{value}</span>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

import PropTypes from 'prop-types';

VehicleDetails.propTypes = {
	equipment: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	details: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			value: PropTypes.string,
		})
	),
};
export default VehicleDetails;
