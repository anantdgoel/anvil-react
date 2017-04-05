import React, { Component } from 'react';
import '../css/Header.css';
import logo from '../img/logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import {cyan500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  tabs: {
    color: cyan500,
    height: 50,
  },
 
  });

export default class Header extends Component {
	render() {
    return (
    	<div className="Header">
    		<div className="Header_1">
    		<img src={logo} className="App-logo" alt="logo" />
    		<h2>Welcome to the Anvil</h2>
    		</div>

    	<MuiThemeProvider muiTheme={muiTheme}>
    	<Tabs>
    		<Tab
     		 icon={<FontIcon className="material-icons">dashboard</FontIcon>}
    		/>
    		<Tab
      		icon={<FontIcon className="material-icons">events</FontIcon>}
    		/>
    		<Tab
     		icon={<FontIcon className="material-icons">other members</FontIcon>}
   			 />
    		<Tab
     		icon={<FontIcon className="material-icons">profile</FontIcon>}
   			 />
  		</Tabs>
  		</MuiThemeProvider>
    	</div>

    );
  }
}