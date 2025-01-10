import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from '@/components/Icon';

import css from './FavoriteButton.module.css';

const FavoriteButton = ({ isFavorite, onClick }) => (
	<button
		className={clsx(css.favoriteButon, { [css.favoriteButonActive]: isFavorite })}
		onClick={onClick}
	>
		<Icon name="heart" />
	</button>
);

FavoriteButton.propTypes = {
	isFavorite: PropTypes.bool,
	onClick: PropTypes.func,
};
export default FavoriteButton;
