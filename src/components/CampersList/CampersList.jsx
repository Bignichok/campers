import Button from '@/components/Button';

import useCampersList from './useCampersList';
import CampersListItem from './CampersListItem';
import css from './CampersList.module.css';

const CampersList = () => {
	const {
		visibleCampers,
		loadMoreButtonVisibility,
		handleLoadMore,
		hanleAddToFavorites,
		handleShowMore,
	} = useCampersList();

	if (!visibleCampers.length) {
		return null;
	}

	return (
		<div className={css.campersListHolder}>
			<ul className={css.campersList}>
				{visibleCampers.map(camper => (
					<CampersListItem
						key={camper.id}
						hanleAddToFavorites={hanleAddToFavorites}
						handleShowMore={handleShowMore}
						{...camper}
					/>
				))}
			</ul>
			{loadMoreButtonVisibility && (
				<Button className={css.button} secondary onClick={handleLoadMore}>
					Load more
				</Button>
			)}
		</div>
	);
};

export default CampersList;
