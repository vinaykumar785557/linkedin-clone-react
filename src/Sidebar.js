import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
	const user = useSelector(selectUser);
	const recentItem = (topic) => (
		<div className='sidebar__recentItem'>
			<span className='sidebar__hash'>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1589550257241-c7a0d595f525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
					alt=''
				/>
				<Avatar className='sidebar__avatar' src={user.photoURL}>
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Who viewed you</p>
					<p className='sidebar__statNumber'>2,543</p>
				</div>
				<div className='sidebar__stat'>
					<p>Views on post</p>
					<p className='sidebar__statNumber'>5,000</p>{' '}
				</div>
			</div>

			<div className='sidebar__bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('javascript')}
				{recentItem('software developer')}
				{recentItem('open to work')}
				{recentItem('material ui')}
			</div>
		</div>
	);
}

export default Sidebar;
