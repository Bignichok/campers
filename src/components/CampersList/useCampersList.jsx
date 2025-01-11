import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchCampers } from '@/redux/campers/operations';
import {
	selectFilteredCampers,
	selectCampersLoading,
	selectCampersError,
} from '@/redux/campers/selectors';
import { setFavorites } from '@/redux/favorites/slice';

const useCampersList = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const campers = useSelector(selectFilteredCampers);
	const isLoading = useSelector(selectCampersLoading);
	const isError = useSelector(selectCampersError);

	const [visibleCount, setVisibleCount] = useState(4);

	useEffect(() => {
		dispatch(fetchCampers());
	}, []);

	useEffect(() => {
		setVisibleCount(4);
	}, [campers]);

	const handleLoadMore = useCallback(() => {
		setVisibleCount(prevCount => prevCount + 4);
	}, []);

	const handleAddToFavorites = useCallback(camperId => {
		dispatch(setFavorites(camperId));
	}, []);

	const handleShowMore = useCallback(camperId => {
		navigate(`/catalog/${camperId}`);
	}, []);

	const visibleCampers = campers.slice(0, visibleCount);
	const loadMoreButtonVisibility = campers.length > visibleCount;

	return {
		visibleCampers,
		loadMoreButtonVisibility,
		handleLoadMore,
		handleAddToFavorites,
		handleShowMore,
		isLoading,
		isError,
	};
};

export default useCampersList;
