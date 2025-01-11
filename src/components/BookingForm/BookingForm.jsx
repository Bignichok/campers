import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Error from '@/components/Error';

import css from './BookingForm.module.css';

const BookingForm = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			bookingDate: new Date(),
			comment: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			bookingDate: Yup.date().required('Required'),
			comment: Yup.string(),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log('Form submitted:', values);

			toast.success('Your booking has been submitted successfully!');

			resetForm();
		},
	});

	return (
		<div className={css.container}>
			<h3 className={css.title}>Book your campervan now</h3>
			<h4 className={css.subTitle}>Stay connected! We are always ready to help you.</h4>
			<form onSubmit={formik.handleSubmit} className={css.form}>
				<div className={css.inputHolder}>
					<Input
						id="name"
						placeholder="Name*"
						onChange={formik.handleChange}
						value={formik.values.name}
						name="name"
					/>
					{formik.touched.name && formik.errors.name ? (
						<Error error={formik.errors.name} />
					) : null}
				</div>
				<div className={css.inputHolder}>
					<Input
						id="email"
						placeholder="Email*"
						onChange={formik.handleChange}
						value={formik.values.email}
						name="email"
						type="email"
					/>
					{formik.touched.email && formik.errors.email ? (
						<Error error={formik.errors.email} />
					) : null}
				</div>
				<div className={css.inputHolder}>
					<DatePicker
						selected={formik.values.bookingDate}
						onChange={date => formik.setFieldValue('bookingDate', date)}
						onBlur={formik.handleBlur}
						className={css.datePickerInput}
						id="bookingDate"
					/>
					{formik.touched.bookingDate && formik.errors.bookingDate ? (
						<Error error={formik.errors.bookingDate} />
					) : null}
				</div>
				<div>
					<textarea
						id="comment"
						name="comment"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.comment}
						className={css.textarea}
						placeholder="Comment"
					/>
					{formik.touched.comment && formik.errors.comment ? (
						<Error error={formik.errors.comment} />
					) : null}
				</div>
				<Button type="submit" className={css.button}>
					Submit
				</Button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default BookingForm;
