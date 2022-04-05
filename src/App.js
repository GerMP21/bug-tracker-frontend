import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Tickets from './components/Tickets';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>
          Bug Tracker
        </h1>
        <div className='lists'>
          <Projects />
          <Tickets />
        </div>
      </div>
    );
  }
}

export default App;
