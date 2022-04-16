import {
	BusinessCenter,
	Chat,
	Home,
	Notifications,
	Search,
	SupervisorAccount,
} from '@mui/icons-material';
import React from 'react';
import { useDispatch } from 'react-redux';
import './Header.css';
import HeaderOption from './HeaderOption';
import { logout } from './features/userSlice';
import { auth } from './firebase';
function Header() {
	const dispatch = useDispatch();
	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'
					alt=''></img>

				<div className='header__search'>
					<Search />
					<input type='text' placeholder='Search'></input>
				</div>
			</div>
			<div className='header__right'>
				<HeaderOption Icon={Home} title='Home' />
				<HeaderOption Icon={SupervisorAccount} title='My Network' />
				<HeaderOption Icon={BusinessCenter} title='Jobs' />
				<HeaderOption Icon={Chat} title='Messaging' />
				<HeaderOption Icon={Notifications} title='Notifications' />
				<HeaderOption
					onClick={logoutOfApp}
					avatar='https://avatars.githubusercontent.com/u/77814463?s=400&u=032d919a2585916d8f4c78448464dd4b20a4013f&v=4 '
					title='me'
				/>
			</div>
		</div>
	);
}

export default Header;
