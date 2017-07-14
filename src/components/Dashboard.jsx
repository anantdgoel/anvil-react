import React, { Component } from 'react';
import Profile from './Profile';
import Events from './Events';

const dummyUser = {
  "uid": 123456789,
  "fname": "Audrey",
  "lname": "Vincent",
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
};
const eventData = {

};

const Dashboard = () => (
	<div className="Dashboard page">
		<Profile user={dummyUser} />
		<Events events={eventData} />
	</div>
);
export default Dashboard;
