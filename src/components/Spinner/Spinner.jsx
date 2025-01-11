import css from './Spinner.module.css';

const Spinner = () => {
	return (
		<div className={css.spinnerContainer}>
			<div className={css.spinner}></div>
		</div>
	);
};

export default Spinner;
