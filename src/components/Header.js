import { Avatar } from '@material-ui/core';
import { AccessTime, HelpOutline, Search, FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
	const [ { user } ] = useStateValue();

	return (
		<div className="header">
			<div className="header_left" />
			{/* Time icon */}
			<AccessTime />
			<div className="header_search">
				{/* Search icon */}
				<Search />
				{/* input */}
				<input placeholder="Search Slack for ..." />
			</div>
			{/* Help icon */}
			<div className="header_help">
				<HelpOutline />
			</div>

			<div className="header_right" />
			{/* Avatars for logged in user */}

			<Avatar
				className="header_avatar"
				alt={user?.displayName}
				src={user?.photoURL}
			
				/* makes icon square like Slack */
				style={{ borderRadius: 0 }}
			/>
			<FiberManualRecord className="header_avatar_dot" />
		</div>
	);
}

export default Header;
