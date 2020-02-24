import React from 'react';
import './SkillPage.css'

import Characteristic from './Characteristic';
import Divider from '../Utils/Divider';
import Skill from './Skill';

class SkillPage extends React.Component {
  render() {
    return (
      <div className="container skill-root">
        <div className="characteristics-bg">
          <div className="characteristics-title-box">
            <div className="characteristics-title">Characteristics</div>
          </div>
          <div className="row characteristics-value-box">
            <Characteristic name="Brawn" value="4" />
            <Characteristic name="Agility" value="2" />
            <Characteristic name="Intelect" value="3" />
            <Characteristic name="Cunning" value="4" />
            <Characteristic name="Willpower" value="5" />
            <Characteristic name="Presence" value="6" />
          </div>
        </div>
        <div className="skill-divider">
          <Divider title="Skills" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-5">              
              <div className="container">
                <div className="row">
                  <div className="col-7">GENERAL SKILLS</div>
                  <div className="col-2">CHARS</div>
                  <div className="col-3">POOL</div>
                </div>
                <Skill name="Astrogation"/>
                <Skill name="Athletics"/>
                <Skill name="Charm"/>
                <Skill name="Coercion"/>
                <Skill name="Computers"/>
                <Skill name="Cool"/>
                <Skill name="Coordination"/>
                <Skill name="Deception"/>
                <Skill name="Discipline"/>
                <Skill name="Leadership"/>
                <Skill name="Mechanics"/>
                <Skill name="Medicine"/>
                <Skill name="Negotiation"/>
                <Skill name="Perception"/>
                <Skill name="Piloting - Planetery"/>
                <Skill name="Piloting - Space"/>
                <Skill name="Resilience"/>
                <Skill name="Skullduggery"/>   
                <Skill name="Stealth"/>
              </div>
            </div>
            <div className="col-2"/>
            <div className="col-5">
              <div className="container">
              <div className="row">
                  <div className="col-7">GENERAL SKILLS</div>
                  <div className="col-2">CHARS</div>
                  <div className="col-3">POOL</div>
                </div>                
                <Skill name="Streetwise"/>
                <Skill name="Survival"/>
                <Skill name="Vigilance"/>
                <div className="row">
                  <div className="col-7">KNOWLEDGE SKILLS</div>
                  <div className="col-2">CHARS</div>
                  <div className="col-3">POOL</div>
                </div>     
                <Skill name="Core Worlds"/>
                <Skill name="Education"/>
                <Skill name="Lore"/>
                <Skill name="Outer Rim"/>
                <Skill name="Underworld"/>
                <Skill name="Warfare"/>
                <Skill name="Xenology"/>
                <div className="row">
                  <div className="col-7">COMBAT SKILLS</div>
                  <div className="col-2">CHARS</div>
                  <div className="col-3">POOL</div>
                </div>  
                <Skill name="Brawl"/>
                <Skill name="Gunnery"/>
                <Skill name="Lightsaber"/>
                <Skill name="Melee"/>
                <Skill name="Ranged - Heavy"/>
                <Skill name="Ranged - Light"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillPage;