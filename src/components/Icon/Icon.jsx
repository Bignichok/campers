import PropTypes from 'prop-types';

import css from './Icon.module.css';
import clsx from 'clsx';

const Icon = ({ name, width = 24, height = 24, color = 'currentColor', className, ...props }) => {
	return (
		<svg
			className={clsx(css.icon, className)}
			width={width}
			height={height}
			fill={color}
			{...props}
		>
			<use xlinkHref={`#icon-${name}`} />
		</svg>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	color: PropTypes.string,
	className: PropTypes.string,
};

export default Icon;
