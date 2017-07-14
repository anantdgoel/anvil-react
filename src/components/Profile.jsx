import React, { Component } from 'react';
import prof from '../img/avatar.jpg';

class Profile extends Component {

	render() {
		const { user } = this.props;
		return(
			<div className="margin container">
				<div className="header">
					<h1>Hello {user.fname}</h1>
				</div>
				<img src={prof} className="prof-pic" alt="profile" />
			</div>

		);
	}
}
export default Profile;
