import React from 'react';
import './SkillComponent.css'

import Characteristic from './Characteristic';

class SkillComponent extends React.Component {
  render() {
    return (
      <div className="container skill-root">
        <div className="characteristics-bg">
          <div className="characteristics-title-box">
            <div className="characteristics-title">
              Characteristics
            </div>
          </div>
          <div className="row characteristics-value-box">
            <Characteristic name="Brawn" value="1" />
            <Characteristic name="Agility" value="2" />
            <Characteristic name="Intelect" value="3" />
            <Characteristic name="Cunning" value="4" />
            <Characteristic name="Willpower" value="5" />
            <Characteristic name="Presence" value="6" />
          </div>
        </div>
      </div>
    );
  }
}

export default SkillComponent;