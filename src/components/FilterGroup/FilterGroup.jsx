import PropTypes from 'prop-types';

import Icon from '@/components/Icon';

import css from './FilterGroup.module.css';
import clsx from 'clsx';

const FilterGroup = ({ filters, onFilterChange, title, activeFilterIds }) => {
	return (
		<div>
			{title && <h3 className={css.title}>{title}</h3>}
			<ul className={css.filterGroup}>
				{filters.map(filter => (
					<li
						className={clsx(css.filterGroupItem, {
							[css.activeFilter]: activeFilterIds.includes(filter.id),
						})}
						key={filter.id}
						onClick={() => onFilterChange(filter.id)}
					>
						<Icon name={filter.iconName} width={32} height={32} />
						<p>{filter.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

FilterGroup.propTypes = {
	filters: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
		})
	),
	onFilterChange: PropTypes.func,
	title: PropTypes.string,
	activeFilterIds: PropTypes.arrayOf(PropTypes.string),
};

export default FilterGroup;
