import React, { Component } from 'react';
import '../css/Modal.css';


class Modal extends Component {

	render() {
		if (!this.props.show) {
			return null;
		}
		const backdropStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'rgba(0,0,0,0.3)',
			padding: 180
		};

		const modalStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			maxWidth: 200,
			minWidth: 300,
			minHeight: 50,
			margin: 'auto',
			padding: 60,
		};
	
		return(
			<div className="backdrop" style={backdropStyle} onClick={this.props.onClose}>
				<div className="modal" style={modalStyle}>
				{this.props.children}
				</div>
			</div>

		);
	}
}
export default Modal;