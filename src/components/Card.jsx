import React, { Component } from 'react';
import '../css/Card.css';
import avatar from '../img/avatar.jpg';

class Card extends Component {

	render() {
	
		return(
			<div className="Card">
				<div className="Card1">

				<img src={avatar} className="img-circle" />

				<div className="content">
					<div className="name"> Jack Sparrow </div>
					<div className="description"> 	Pirate Captain </div>

				</div>

				</div>
			
			</div>

		);
	}
}
export default Card;