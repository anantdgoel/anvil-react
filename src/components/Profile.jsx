import React from 'react';
import prof from '../img/avatar.jpg';
import medium from '../img/icons/medium.svg';
import facebook from '../img/icons/facebook.svg';

const Profile = ({ user }) => (
	<div className="left bgwhite margin container space">
		<div className="header paddingLeft left">
			<h3 className="ib">Hello {user.fname}</h3>
		</div>
		<img src={prof} className="prof-pic" alt="profile" />
		<div className="bgwhite padding paddingLeft left content">
			<span className="bold">{user.fname}&nbsp;{user.lname}</span>
			<br/>
			{user.email}
		</div>
		<div className="bgwhite padding">
			<p className="skill">{user.skills[0]}</p>
			<p className="skill">{user.skills[1]}</p>
			<p className="skill">{user.skills[2]}</p>
		</div>
		<div className="bgwhite padding right">
			<a href=""><img src={medium} className="icon"/></a>
			<a href=""><img src={facebook} className="icon"/></a>
		</div>
	</div>
);

export default Profile;
