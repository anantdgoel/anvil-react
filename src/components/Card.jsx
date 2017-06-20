import React, { Component } from 'react';
import '../css/Card.css';
import avatar from '../img/avatar.jpg';

class Card extends Component {

	render() {
	
		return(
			<div className="Card">
				<div className="Card1">

				<img src={avatar} className="img-circle" />
				<a> hiiiii </a>
				</div>
			
			</div>

		);
	}
}
export default Card;