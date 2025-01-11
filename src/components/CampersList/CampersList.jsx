import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@/components/Button';

import { fetchCampers } from '@/redux/campers/operations';
import { selectFilteredCampers } from '@/redux/campers/selectors';
import { setFavorites } from '@/redux/favorites/slice';

import css from './CampersList.module.css';

import CampersListItem from './CampersListItem';

const CampersList = () => {
	const dispatch = useDispatch();
	const campers = useSelector(selectFilteredCampers);

	const [visibleCount, setVisibleCount] = useState(4);

	useEffect(() => {
		dispatch(fetchCampers());
	}, []);

	useEffect(() => {
		setVisibleCount(4);
	}, [campers]);

	if (!campers.length) {
		return null;
	}

	const handleLoadMore = () => {
		setVisibleCount(prevCount => prevCount + 4);
	};

	const hanleAddToFavorites = camperId => {
		dispatch(setFavorites(camperId));
	};

	const visibleCampers = campers.slice(0, visibleCount);
	const loadMoreButtonVisibility = campers.length > visibleCount;

	return (
		<div className={css.campersListHolder}>
			<ul className={css.campersList}>
				{visibleCampers.map(camper => (
					<CampersListItem
						key={camper.id}
						hanleAddToFavorites={hanleAddToFavorites}
						{...camper}
					/>
				))}
			</ul>
			{loadMoreButtonVisibility && (
				<Button className={css.button} secondary onClick={handleLoadMore}>
					Load more
				</Button>
			)}
		</div>
	);
};

export default CampersList;
