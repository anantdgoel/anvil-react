import React, { Component } from 'react';
import Card from './Card.jsx';
import '../css/Members.css';

class OtherMembers extends Component {

	render() {
	
		return(
			<div className="OtherMembers">
				<div className="Members">
					The Anvil Members
				</div>
				<Card/>
			</div>

		);
	}
}
export default OtherMembers;
