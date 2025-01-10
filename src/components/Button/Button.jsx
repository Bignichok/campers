import PropTypes from 'prop-types';

import css from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, className, secondary, ...props }) => {
	return (
		<button
			className={clsx(css.button, className, secondary ? css.secondary : css.primary)}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	secondary: PropTypes.bool,
};

export default Button;
