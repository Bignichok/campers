import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';

import { selectFavorites } from '@/redux/favorites/selectors';
import { setFavorites } from '@/redux/favorites/slice';

import Icon from '@/components/Icon';

import css from './FavoriteButton.module.css';

const FavoriteButton = ({ id }) => {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);

	const handleAddToFavorites = () => {
		dispatch(setFavorites(id));
	};

	const isFavorite = favorites.includes(id);
	return (
		<button
			className={clsx(css.favoriteButon, { [css.favoriteButonActive]: isFavorite })}
			onClick={handleAddToFavorites}
		>
			<Icon name="heart" />
		</button>
	);
};

FavoriteButton.propTypes = {
	id: PropTypes.string,
};
export default FavoriteButton;
