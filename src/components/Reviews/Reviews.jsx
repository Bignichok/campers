import PropTypes from 'prop-types';

import RatingList from '@/components/RatingList';

import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
	if (!reviews?.length) {
		return null;
	}
	return (
		<ul className={css.reviewsList}>
			{reviews.map(({ comment, reviewer_name, reviewer_rating }, index) => {
				return (
					<li key={reviewer_name + index}>
						<div className={css.firstRow}>
							<div className={css.reviewerLogo}>{reviewer_name[0]}</div>
							<div>
								<p className={css.name}>{reviewer_name}</p>
								<RatingList rating={reviewer_rating} />
							</div>
						</div>

						<p className={css.comment}>{comment}</p>
					</li>
				);
			})}
		</ul>
	);
};

Reviews.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			comment: PropTypes.string,
			reviewer_name: PropTypes.string,
			reviewer_rating: PropTypes.number,
		})
	),
};
export default Reviews;
