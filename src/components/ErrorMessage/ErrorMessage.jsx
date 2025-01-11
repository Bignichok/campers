import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
	return (
		<p className={css.error}>
			Sorry, the service is temporarily unavailable. Please try again later.
		</p>
	);
};

export default ErrorMessage;
