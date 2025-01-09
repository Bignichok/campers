import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ children, ...props }) => {
	return (
		<button className={css.button} {...props}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
};
export default Button;
