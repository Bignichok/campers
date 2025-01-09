import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';

import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
	return (
		<header className={clsx(css.header, 'container')}>
			<div className={css.headerContainer}>
				<div className={css.headerLogoHolder}>
					<Logo />
				</div>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
