import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCampers } from '@/redux/campers/operations';
import {
	selectFilteredCampers,
	selectCampersLoading,
	selectCampersError,
} from '@/redux/campers/selectors';

const useCampersList = () => {
	const dispatch = useDispatch();
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

	const visibleCampers = campers.slice(0, visibleCount);
	const loadMoreButtonVisibility = campers.length > visibleCount;

	return {
		visibleCampers,
		loadMoreButtonVisibility,
		handleLoadMore,
		isLoading,
		isError,
	};
};

export default useCampersList;
