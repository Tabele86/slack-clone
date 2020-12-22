import {
	Create,
	KeyboardArrowDown,
	Inbox,
	Drafts,
	BookmarkBorder,
	PeopleAlt,
	Apps,
	FileCopy,
	ExpandLess,
	ExpandMore,
	Add
} from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import db from '../firebase';

function Sidebar() {
	const [ channels, setChannels ] = useState([]);

	//Run this code ONCE when the sidebar components loads
	useEffect(() => {
		db.collection('rooms').onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name
				}))
			)
		);
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<div className="slack_menu">
					<h2>SlackDev</h2>
					<KeyboardArrowDown />
				</div>
				<Create />
			</div>
			{/* <div className="sidebar_browse"> */}
			{/* <MoreVert />
				<Browse /> */}
			{/* </div> */}
			<div className="sidebar_options">
				<SidebarOption Icon={Inbox} title="Mention & reactions" />
				<SidebarOption Icon={Drafts} title="Saved items" />
				<SidebarOption Icon={BookmarkBorder} title="Channel browser" />
				<SidebarOption Icon={PeopleAlt} title="People & user groups" />
				<SidebarOption Icon={Apps} title="Apps" />
				<SidebarOption Icon={FileCopy} title="File browser" />
				<SidebarOption Icon={ExpandLess} title="Show Less" />
				<hr />
			</div>
			<div className="sidebar_channels">
				<SidebarOption Icon={ExpandMore} title="Channels" />
				<hr />
				<SidebarOption Icon={Add} addChannelOption title="Add Channel" />
			</div>

			{/* Connect to dB and list all the channels */}
			{/* <SidebarOption.../>  */}
			{channels.map((channel) => <SidebarOption title={channel.name} id={channel.id} />)}
		</div>
	);
}

export default Sidebar;
