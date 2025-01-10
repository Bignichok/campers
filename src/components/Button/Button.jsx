import PropTypes from 'prop-types';

import css from './Button.module.css';
import clsx from 'clsx';

const Button = ({ children, className, ...props }) => {
	return (
		<button className={clsx(css.button, className)} {...props}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};
export default Button;
