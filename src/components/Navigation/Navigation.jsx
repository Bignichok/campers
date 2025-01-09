import { NavLink } from 'react-router';

import css from './Navigation.module.css';

const Navigation = () => {
	const navItems = [
		{ href: '/', text: 'Home' },
		{ href: '/catalog', text: 'Catalog' },
	];

	return (
		<nav className={css.navigation}>
			<ul className={css.navigationList}>
				{navItems.map(({ href, text }) => (
					<li key={`nav-${text}`}>
						<NavLink
							to={href}
							className={({ isActive }) => (isActive ? css.active : '')}
						>
							{text}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
