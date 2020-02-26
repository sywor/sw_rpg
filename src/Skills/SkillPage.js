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
        <div className="skill-tables-box">
          <table className="skill-table">
            <tbody>
              <tr className="skill-head-title-row">
                <th />
                <th className="skill-head-title-name">GENERAL SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Astrogation" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Athletics" char="BR" career={false} pool={[0, 0, 3, 0, 0]} />
              <Skill name="Charm" char="PR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Coercion" char="WIL" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Computers" char="INT" career={false} pool={[0, 3, 0, 0, 0]} />
              <Skill name="Cool" char="PR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Coordination" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Deception" char="CUN" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Discipline" char="WIL" career={false} pool={[0, 0, 0, 0, 2]} />
              <Skill name="Leadership" char="PR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Mechanics" char="INT" career={false} pool={[0, 0, 0, 1, 0]} />
              <Skill name="Medicine" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Negotiation" char="PR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Perception" char="CUN" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Piloting - Planetery" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Piloting - Space" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Resilience" char="BR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Skullduggery" char="CUN" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Stealth" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
            </tbody>
          </table>
          <div className="skill-tables-spacer" />
          <table className="skill-table">
            <tbody>
              <tr className="skill-head-title-row">
                <th />
                <th className="skill-head-title-name">GENERAL SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Streetwise" char="CUN" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Survival" char="CUN" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Vigilance" char="WIL" career={false} pool={[0, 0, 0, 0, 0]} />
              <tr className="skill-head-title-row">
                <th />
                <th className="skill-head-title-name">KNOWLEDGE SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Core Worlds" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Education" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Lore" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Outer Rim" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Underworld" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Warfare" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Xenology" char="INT" career={false} pool={[0, 0, 0, 0, 0]} />
              <tr className="skill-head-title-row">
                <th />
                <th className="skill-head-title-name">COMBAT SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Brawl" char="BR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Gunnery" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Lightsaber" char="BR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Melee" char="BR" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Ranged - Heavy" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
              <Skill name="Ranged - Light" char="AG" career={false} pool={[0, 0, 0, 0, 0]} />
            </tbody>
          </table>
        </div>
        <div className="skill-divider">
          <Divider title="Abilities" />
        </div>
      </div>
    );
  }
}

export default SkillPage;