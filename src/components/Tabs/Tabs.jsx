import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from './Tabs.module.css';

const Tabs = ({ tabs, onTabClick, activeTabId }) => {
	return (
		<ul className={css.tabs}>
			{tabs.map(({ id, title }) => (
				<li key={id}>
					<button
						className={clsx(id === activeTabId && css.activeTab, css.tab)}
						onClick={() => onTabClick(id)}
					>
						{title}
					</button>
				</li>
			))}
		</ul>
	);
};

Tabs.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			title: PropTypes.string,
		})
	).isRequired,
	onTabClick: PropTypes.func,
	activeTabId: PropTypes.string,
};
export default Tabs;
