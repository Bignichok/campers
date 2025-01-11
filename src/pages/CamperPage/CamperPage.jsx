import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCamper } from '@/redux/camper/operations';
import { selectCamper, selectCamperLoading, selectCamperError } from '@/redux/camper/selectors';

import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import CamperHeader from '@/components/CamperHeader';
import Tabs from '@/components/Tabs';

import css from './CamperPage.module.css';

const tabs = [
	{
		id: 'features',
		title: 'Features',
	},
	{
		id: 'reviews',
		title: 'Reviews',
	},
];

const CamperPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const camper = useSelector(selectCamper);
	const isLoading = useSelector(selectCamperLoading);
	const isError = useSelector(selectCamperError);

	const [activeTab, setActiveTab] = useState('features');

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

	const { name, price, rating, reviews, location, gallery, description } = camper;

	return (
		<div className={css.container}>
			<CamperHeader
				{...{ name, price, rating, reviews: reviews.length, location, detailsPage: true }}
			/>
			{gallery?.length > 0 && (
				<ul className={css.gallery}>
					{gallery.map(({ thumb }, index) => (
						<li key={index}>
							<img
								className={css.image}
								src={thumb}
								width={292}
								height={312}
								alt={name}
								loading="lazy"
							/>
						</li>
					))}
				</ul>
			)}
			<p className={css.description}>{description}</p>
			<Tabs tabs={tabs} onTabClick={setActiveTab} activeTabId={activeTab} />
		</div>
	);
};

export default CamperPage;
