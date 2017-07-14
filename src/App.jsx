import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header.jsx';
import './css/app.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes />
      <div className="footer">
      </div>
    </div>
  </BrowserRouter>
);

export default App;
