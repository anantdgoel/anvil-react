import React, { Component } from 'react';
import Profile from './Profile';
import Events from './Events';

const dummyData = {
	user: {
  "uid": 123456789,
  "fname": "First Name",
  "lname": "Last Name",
  "email": "first.last@example.com",
  "paid": false,
  "skills": [
    "Product Designer",
    "Front-end Developer",
    "Python Developer",
  ],
  "key-fob": "key-ID",
  "student": true,
  "graduation": 2020,
  "auth": "JWT Token"
	}
};
const eventData = {

};

class Dashboard extends Component {

	render() {

		return(
			<div className="Dashboard">
			<Profile user={dummyData} />
			<Events events={eventData} />
			</div>

		);
	}
}
export default Dashboard;
