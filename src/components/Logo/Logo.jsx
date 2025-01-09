import { NavLink } from 'react-router-dom';

import Icon from '@/components/Icon';

const Logo = () => {
	return (
		<NavLink to="/">
			<Icon name="logo" width={136} height={16} />
		</NavLink>
	);
};

export default Logo;
