import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../img/logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {cyan500} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Header extends Component {
	render() {
    return (
      <div className="Header">
    		<div className="Header_1">
    		<img src={logo} className="App-logo" alt="logo" />
    		<h2>Welcome to the Anvil</h2>
    	</div>

      <div className="Header_2">
      <nav className="nav">
      <a>
      <Link to="Events"> Events</Link>
      <Link to="Dashboard">Dashboard</Link>
      <Link to="OtherMembers">Other Members</Link>
      <Link className="aa" to="Profile">Profile</Link>
      </a>

     </nav>
        
        </div>
        </div>

    );
  }
}