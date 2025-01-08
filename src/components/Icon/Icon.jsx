import PropTypes from 'prop-types';

import css from './Icon.module.css';

const Icon = ({ name, size, color, ...props }) => {
	return (
		<svg className={css.icon} width={size} height={size} fill={color} {...props}>
			<use xlinkHref={`#${name}`} />
		</svg>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
};

Icon.defaultProps = {
	size: 24,
	color: 'currentColor',
	className: '',
};

export default Icon;
