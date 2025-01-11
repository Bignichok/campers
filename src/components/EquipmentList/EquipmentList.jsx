import PropTypes from 'prop-types';

import Icon from '@/components/Icon';

import css from './EquipmentList.module.css';
import clsx from 'clsx';

const EquipmentList = ({ equipment, secondary }) => {
	return (
		<ul className={css.equpmentList}>
			{equipment.map(({ id, name, iconName }) => (
				<li className={clsx(css.equpmentListItem, secondary && css.secondary)} key={id}>
					<Icon name={iconName} width={20} height={20} />
					<span>{name}</span>
				</li>
			))}
		</ul>
	);
};

EquipmentList.propTypes = {
	equipment: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			iconName: PropTypes.string,
		})
	),
	secondary: PropTypes.bool,
};

export default EquipmentList;
