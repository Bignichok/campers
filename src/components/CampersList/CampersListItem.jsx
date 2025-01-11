import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();

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
						isFavorite,
						rating,
						reviews,
						location,
						id,
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
	price: PropTypes.string,
	description: PropTypes.string,
	rating: PropTypes.number,
	reviews: PropTypes.number,
	location: PropTypes.string,
	equipment: PropTypes.array,
	id: PropTypes.string,
	isFavorite: PropTypes.bool,
	handleShowMore: PropTypes.func,
};

export default CampersListItem;
