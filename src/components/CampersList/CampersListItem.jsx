import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { setFavorites } from '@/redux/favorites/slice';

import Button from '@/components/Button';
import EquipmentList from '@/components/EquipmentList';
import CamperHeader from '@/components/CamperHeader';

import css from './CampersListItem.module.css';

const CampersListItem = ({
	name,
	imageUrl,
	price,
	description,
	rating,
	reviews,
	location,
	equipment,
	id,
	isFavorite,
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleAddToFavorites = useCallback(() => {
		dispatch(setFavorites(id));
	}, []);

	const handleShowMore = useCallback(() => {
		navigate(`/catalog/${id}`);
	}, []);

	return (
		<li className={css.wrapper}>
			<img
				className={css.image}
				src={imageUrl}
				width={292}
				height={320}
				alt={name}
				loading="lazy"
			/>
			<div className={css.contentHolder}>
				<CamperHeader
					{...{
						name,
						price,
						handleAddToFavorites,
						isFavorite,
						rating,
						reviews,
						location,
					}}
				/>
				<p className={css.description}>{description}</p>
				<EquipmentList equipment={equipment} />
				<Button className={css.button} onClick={handleShowMore}>
					Show more
				</Button>
			</div>
		</li>
	);
};

CampersListItem.propTypes = {
	name: PropTypes.string,
	imageUrl: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	rating: PropTypes.number,
	reviews: PropTypes.number,
	location: PropTypes.string,
	equipment: PropTypes.array,
	id: PropTypes.string,
	handleAddToFavorites: PropTypes.func,
	isFavorite: PropTypes.bool,
	handleShowMore: PropTypes.func,
};

export default CampersListItem;
