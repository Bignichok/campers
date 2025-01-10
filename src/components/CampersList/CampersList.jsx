import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCampers } from '@/redux/campers/operations';
import { selectCampers } from '@/redux/campers/selectors';

import css from './CampersList.module.css';

import CampersListItem from './CampersListItem';

const CampersList = () => {
	const dispatch = useDispatch();
	const campers = useSelector(selectCampers);

	useEffect(() => {
		dispatch(fetchCampers());
	}, []);

	if (!campers.length) {
		return null;
	}
	console.log(campers);
	return (
		<ul className={css.campersList}>
			{campers.map(camper => (
				<CampersListItem key={camper.id} {...camper} />
			))}
		</ul>
	);
};

export default CampersList;
