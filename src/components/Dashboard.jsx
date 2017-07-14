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

const eventData = [
	{
		"event": "Hack the Anvil",
		"organization": "Purdue Hackers",
		"location": "The Anvil",
		"date": "September 2, 2017",
		"time": "7:00 PM",
		"description": "Hack the Anvil is a great place for you to hack hack hack"
	},
	{
		"event": "Hack the Anvil",
		"organization": "Purdue Hackers",
		"location": "The Anvil",
		"date": "September 2, 2017",
		"time": "7:00 PM",
		"description": "Hack the Anvil is a great place for you to hack hack hack"
	}
];

const Dashboard = () => (
	<div className="Dashboard page">
		<Profile user={dummyUser} />
		<Events events={eventData} />
	</div>
);
export default Dashboard;
