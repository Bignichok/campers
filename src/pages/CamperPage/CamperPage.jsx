import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCamper } from '@/redux/camper/operations';
import { selectCamper, selectCamperLoading, selectCamperError } from '@/redux/camper/selectors';

import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import CamperHeader from '@/components/CamperHeader';

import css from './CamperPage.module.css';

const CamperPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const camper = useSelector(selectCamper);
	const isLoading = useSelector(selectCamperLoading);
	const isError = useSelector(selectCamperError);

	useEffect(() => {
		dispatch(fetchCamper(id));
	}, [id]);

	if (isLoading) {
		return (
			<div className={css.container}>
				<Spinner />
			</div>
		);
	}

	if (isError || !camper) {
		return (
			<div className={css.container}>
				<ErrorMessage />
			</div>
		);
	}

	const { name, price, rating, reviews, location } = camper;

	return (
		<div className={css.container}>
			<CamperHeader
				{...{ name, price, rating, reviews: reviews.length, location, detailsPage: true }}
			/>
		</div>
	);
};

export default CamperPage;
