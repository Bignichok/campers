import PropTypes from 'prop-types';

import Icon from '@/components/Icon';
import Button from '@/components/Button';
import EquipmentList from '@/components/EquipmentList';
import FavoriteButton from '@/components/FavoriteButton';

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
	hanleAddToFavorites,
	isFavorite,
	handleShowMore,
}) => {
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
				<div>
					<div className={css.headerFirstRow}>
						<h3>{name}</h3>
						<div className={css.priceHolder}>
							<span>{`${price},00`}</span>
							<FavoriteButton
								onClick={() => hanleAddToFavorites(id)}
								isFavorite={isFavorite}
							/>
						</div>
					</div>
					<ul className={css.headerSecondRow}>
						<li className={css.headerSecondRowItem}>
							<Icon name="rating" width={16} height={16} />
							<span>
								{rating} ({reviews} Reviews)
							</span>
						</li>
						<li className={css.headerSecondRowItem}>
							<Icon name="map" width={16} height={16} />
							<span>{location}</span>
						</li>
					</ul>
				</div>

				<p className={css.description}>{description}</p>
				<EquipmentList equipment={equipment} />
				<Button className={css.button} onClick={() => handleShowMore(id)}>
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
	hanleAddToFavorites: PropTypes.func,
	isFavorite: PropTypes.bool,
	handleShowMore: PropTypes.func,
};

export default CampersListItem;
