import React from 'react';

import './App.css';

import Welcome from './Components/Welcome';


let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a href="#" className="navbar-brand">React Props And State</a>
      </nav>
      <Welcome roll="124" />
    </React.Fragment>
  );
}

export default App;
