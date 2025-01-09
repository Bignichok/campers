import { useNavigate } from 'react-router';

import Button from '@/components/Button';

import css from './HomePage.module.css';
import clsx from 'clsx';

const HomePage = () => {
	const navigate = useNavigate();

	const onViewNowClick = () => {
		navigate('/catalog');
	};

	return (
		<div className={clsx(css.container, 'container')}>
			<h1 className={css.title}>Campers of your dreams</h1>
			<h2 className={css.subTitle}>You can find everything you want in our catalog</h2>
			<Button onClick={onViewNowClick}>View Now</Button>
		</div>
	);
};

export default HomePage;
