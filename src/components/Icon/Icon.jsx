import PropTypes from 'prop-types';

import css from './Icon.module.css';

const Icon = ({ name, width = 24, height = 24, color = 'currentColor', ...props }) => {
	return (
		<svg className={css.icon} width={width} height={height} fill={color} {...props}>
			<use xlinkHref={`#icon-${name}`} />
		</svg>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
};

export default Icon;
