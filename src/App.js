import React from 'react';
import './App.css';
import Characteristic from './Characteristic';

function App() {
  return (
    <div className="container">
      <div class="row">
        <div class="col-sm">
          <Characteristic name="Brawn" />
        </div>
        <div class="col-sm">
          <Characteristic name="Agility" />
        </div>
        <div class="col-sm">
          <Characteristic name="Intelect" />
        </div>
        <div class="col-sm">
          <Characteristic name="Cunning" />
        </div>
        <div class="col-sm">
          <Characteristic name="Willpower" />
        </div>
        <div class="col-sm">
          <Characteristic name="Presence" />
        </div>
      </div>
    </div>
  );
}

export default App;
