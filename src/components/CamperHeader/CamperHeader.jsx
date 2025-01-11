import PropTypes from 'prop-types';

import Icon from '@/components/Icon';
import FavoriteButton from '@/components/FavoriteButton';

import css from './CamperHeader.module.css';

const CamperHeader = ({
	name,
	price,
	handleAddToFavorites,
	isFavorite,
	rating,
	reviews,
	location,
}) => {
	return (
		<div>
			<div className={css.headerFirstRow}>
				<h3>{name}</h3>
				<div className={css.priceHolder}>
					<span>{`${price},00`}</span>
					<FavoriteButton onClick={handleAddToFavorites} isFavorite={isFavorite} />
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
	);
};

CamperHeader.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	handleAddToFavorites: PropTypes.func,
	isFavorite: PropTypes.bool,
	rating: PropTypes.number,
	reviews: PropTypes.number,
	location: PropTypes.string,
};
export default CamperHeader;
