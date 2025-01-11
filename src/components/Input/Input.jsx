import PropTypes from 'prop-types';

import Icon from '@/components/Icon';

import css from './Input.module.css';

const Input = ({
	label,
	placeholder,
	iconName,
	onChange,
	type = 'text',
	value = '',
	name,
	...props
}) => {
	return (
		<div>
			{label && (
				<label htmlFor={label} className={css.label}>
					{label}
				</label>
			)}
			<div className={css.inputWrapper}>
				{iconName && (
					<div className={css.iconHolder}>
						<Icon name={iconName} width={20} height={20} />
					</div>
				)}
				<input
					type={type}
					placeholder={placeholder}
					className={css.inputField}
					onChange={onChange}
					value={value}
					name={name}
					id={label}
					{...props}
				/>
			</div>
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	iconName: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string,
};

export default Input;
