import clsx from 'clsx';

import Filters from '@/components/Filters';
import CampersList from '@/components/CampersList';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
	return (
		<div className={clsx(css.contentHolder, 'container')}>
			<Filters />
			<CampersList />
		</div>
	);
};

export default CatalogPage;
