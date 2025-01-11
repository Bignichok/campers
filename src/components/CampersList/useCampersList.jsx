import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchCampers } from '@/redux/campers/operations';
import { selectFilteredCampers } from '@/redux/campers/selectors';
import { setFavorites } from '@/redux/favorites/slice';

const useCampersList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const campers = useSelector(selectFilteredCampers);

	const [visibleCount, setVisibleCount] = useState(4);

	useEffect(() => {
		dispatch(fetchCampers());
	}, []);

	useEffect(() => {
		setVisibleCount(4);
	}, [campers]);

	const handleLoadMore = () => {
		setVisibleCount(prevCount => prevCount + 4);
	};

	const hanleAddToFavorites = camperId => {
		dispatch(setFavorites(camperId));
	};

	const handleShowMore = camperId => {
		navigate(`/catalog/${camperId}`);
	};

	const visibleCampers = campers.slice(0, visibleCount);
	const loadMoreButtonVisibility = campers.length > visibleCount;

	return {
		visibleCampers,
		loadMoreButtonVisibility,
		handleLoadMore,
		hanleAddToFavorites,
		handleShowMore,
	};
};

export default useCampersList;
