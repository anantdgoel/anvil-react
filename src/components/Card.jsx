import React, { Component } from 'react';
import '../css/Card.css';
import Modal from './Modal.jsx';
import avatar from '../img/avatar.jpg';

class Card extends Component {
	constructor(props) {
  	super(props);

  	this.state = { isOpen: false };
  }
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {

		return(
			<div className="Card">
				<div className="Card1">
				<img src={avatar} className="img-circle" alt="avatar" />
				<div className="cont">
					<div className="content">
						<div className="name"> Jack Sparrow </div>
						<div className="description"> 	Pirate Captain </div>
					</div>
					<button className="button" onClick={this.toggleModal}> Add </button>
					<Modal show={this.state.isOpen}
      					onClose={this.toggleModal}>
      				</Modal>

				</div>

				</div>

			</div>

		);
	}
}
export default Card;
