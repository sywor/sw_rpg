import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import './SkillPage.css'

import Characteristic from './Characteristic';
import Divider from '../Common/Divider';
import Skill from './Skill';

class SkillPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(model) {

    return model && (
      <div className="skill-root">
        <div className="characteristics-bg">
          <div className="characteristics-title-box">
            <div className="std-font gray characteristics-title">Characteristics</div>
          </div>
          <div className="flex-box characteristics-value-box">
            <Characteristic name="Brawn" value={model.characteristics.brawn} />
            <Characteristic name="Agility" value={model.characteristics.agility} />
            <Characteristic name="Intelect" value={model.characteristics.intelect} />
            <Characteristic name="Cunning" value={model.characteristics.cunning} />
            <Characteristic name="Willpower" value={model.characteristics.willpower} />
            <Characteristic name="Presence" value={model.characteristics.presence} />
          </div>
        </div>
        <div className="skill-divider">
          <Divider title="SKILLS" />
        </div>
        <div className="flex-box skill-table">
          <div className="flex-box">
            <table>
              <tbody>
                <tr>
                  <th className="skill-head-title-career" />
                  <th className="std-font gray skill-head-title-name">GENERAL SKILLS</th>
                  <th className="std-font gray skill-head-title-char">CHARS</th>
                  <th className="std-font gray skill-head-title-pool">POOL</th>
                </tr>
                <Skill name="Astrogation" char="INT" model={model.values.astrogation} />
                <Skill name="Athletics" char="BR" model={model.values.athletics} />
                <Skill name="Charm" char="PR" model={model.values.charm} />
                <Skill name="Coercion" char="WIL" model={model.values.coercion} />
                <Skill name="Computers" char="INT" model={model.values.computers} />
                <Skill name="Cool" char="PR" model={model.values.cool} />
                <Skill name="Coordination" char="AG" model={model.values.coordination} />
                <Skill name="Deception" char="CUN" model={model.values.deception} />
                <Skill name="Discipline" char="WIL" model={model.values.discipline} />
                <Skill name="Leadership" char="PR" model={model.values.leadership} />
                <Skill name="Mechanics" char="INT" model={model.values.mechanics} />
                <Skill name="Medicine" char="INT" model={model.values.medicine} />
                <Skill name="Negotiation" char="PR" model={model.values.negotiation} />
                <Skill name="Perception" char="CUN" model={model.values.perception} />
                <Skill name="Piloting - Planetery" char="AG" model={model.values.piloting_planetery} />
                <Skill name="Piloting - Space" char="AG" model={model.values.piloting_space} />
                <Skill name="Resilience" char="BR" model={model.values.resilience} />
                <Skill name="Skullduggery" char="CUN" model={model.values.skullduggery} />
                <Skill name="Stealth" char="AG" model={model.values.stealth} />
              </tbody>
            </table>
          </div>
          <div className="flex-box">
            <table>
              <tbody>
                <tr>
                  <th className="skill-head-title-career" />
                  <th className="std-font gray skill-head-title-name">GENERAL SKILLS</th>
                  <th className="std-font gray skill-head-title-char">CHARS</th>
                  <th className="std-font gray skill-head-title-pool">POOL</th>
                </tr>
                <Skill name="Streetwise" char="CUN" model={model.values.streetwise} />
                <Skill name="Survival" char="CUN" model={model.values.survival} />
                <Skill name="Vigilance" char="WIL" model={model.values.vigilance} />
                <tr>
                  <th className="skill-head-title-career" />
                  <th className="std-font gray skill-head-title-name">KNOWLEDGE SKILLS</th>
                  <th className="std-font gray skill-head-title-char">CHARS</th>
                  <th className="std-font gray skill-head-title-pool">POOL</th>
                </tr>
                <Skill name="Core Worlds" char="INT" model={model.values.core_worlds} />
                <Skill name="Education" char="INT" model={model.values.education} />
                <Skill name="Lore" char="INT" model={model.values.lore} />
                <Skill name="Outer Rim" char="INT" model={model.values.outer_rim} />
                <Skill name="Underworld" char="INT" model={model.values.underworld} />
                <Skill name="Warfare" char="INT" model={model.values.warfare} />
                <Skill name="Xenology" char="INT" model={model.values.xenology} />
                <tr>
                  <th className="skill-head-title-career" />
                  <th className="std-font gray skill-head-title-name">COMBAT SKILLS</th>
                  <th className="std-font gray skill-head-title-char">CHARS</th>
                  <th className="std-font gray skill-head-title-pool">POOL</th>
                </tr>
                <Skill name="Brawl" char="BR" model={model.values.brawl} />
                <Skill name="Gunnery" char="AG" model={model.values.gunnery} />
                <Skill name="Lightsaber" char="BR" model={model.values.lightsaber} />
                <Skill name="Melee" char="BR" model={model.values.melee} />
                <Skill name="Ranged - Heavy" char="AG" model={model.values.ranged_heavy} />
                <Skill name="Ranged - Light" char="AG" model={model.values.ranged_light} />
              </tbody>
            </table>
          </div>
        </div>
        <div className="skill-divider">
          <Divider title="ABILITIES" />
        </div>
      </div>
    )
  }

  render() {

    return this.renderBody(this.props.skills) ||
      <div className="spinner-position-box">
        <div className="spinner-border spinner-size" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return !state.skills.isFetching ?
    {
      skills: state.skills
    } : {};
}

export default withRouter(connect(
  mapStateToProps,
  {}
)(SkillPage));