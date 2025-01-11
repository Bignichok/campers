import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from '@/components/Icon';

import css from './RatingList.module.css';

const RatingList = ({ rating }) => {
	return (
		<ul className={css.ratingList}>
			{[...Array(5)].map((_, i) => (
				<li key={i + 'rating'}>
					<Icon
						name="rating"
						className={clsx(i >= rating ? css.inActiveIcon : css.activeIcon)}
						width={16}
						height={16}
					/>
				</li>
			))}
		</ul>
	);
};

RatingList.propTypes = {
	rating: PropTypes.number.isRequired,
};

export default RatingList;
