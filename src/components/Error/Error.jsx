import PropTypes from 'prop-types';

import css from './Error.module.css';

const Error = ({ error }) => {
	return <p className={css.error}>{error}</p>;
};

Error.propTypes = {
	error: PropTypes.string.isRequired,
};

export default Error;
