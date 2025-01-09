import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';

import css from './Header.module.css';

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.headerLogoHolder}>
				<Logo />
			</div>
			<Navigation />
		</header>
	);
};

export default Header;
