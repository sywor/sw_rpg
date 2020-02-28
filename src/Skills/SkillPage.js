import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './SkillPage.css'

import Characteristic from './Characteristic';
import Divider from '../Utils/Divider';
import Skill from './Skill';

class SkillPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(model) {

    return model && (
      <div className="container skill-root">
        <div className="characteristics-bg">
          <div className="characteristics-title-box">
            <div className="characteristics-title">Characteristics</div>
          </div>
          <div className="row characteristics-value-box">
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
        <div className="skill-tables-box">
          <table className="skill-table">
            <tbody>
              <tr className="skill-head-title-row">
                <th className="skill-head-title-career" />
                <th className="skill-head-title-name">GENERAL SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Astrogation" char="INT" model={model.skills.astrogation} />
              <Skill name="Athletics" char="BR" model={model.skills.athletics} />
              <Skill name="Charm" char="PR" model={model.skills.charm} />
              <Skill name="Coercion" char="WIL" model={model.skills.coercion} />
              <Skill name="Computers" char="INT" model={model.skills.computers} />
              <Skill name="Cool" char="PR" model={model.skills.cool} />
              <Skill name="Coordination" char="AG" model={model.skills.coordination} />
              <Skill name="Deception" char="CUN" model={model.skills.deception} />
              <Skill name="Discipline" char="WIL" model={model.skills.discipline} />
              <Skill name="Leadership" char="PR" model={model.skills.leadership} />
              <Skill name="Mechanics" char="INT" model={model.skills.mechanics} />
              <Skill name="Medicine" char="INT" model={model.skills.medicine} />
              <Skill name="Negotiation" char="PR" model={model.skills.negotiation} />
              <Skill name="Perception" char="CUN" model={model.skills.perception} />
              <Skill name="Piloting - Planetery" char="AG" model={model.skills.piloting_planetery} />
              <Skill name="Piloting - Space" char="AG" model={model.skills.piloting_space} />
              <Skill name="Resilience" char="BR" model={model.skills.resilience} />
              <Skill name="Skullduggery" char="CUN" model={model.skills.skullduggery} />
              <Skill name="Stealth" char="AG" model={model.skills.stealth} />
            </tbody>
          </table>
          <div className="skill-tables-spacer" />
          <table className="skill-table">
            <tbody>
              <tr className="skill-head-title-row">
                <th className="skill-head-title-career" />
                <th className="skill-head-title-name">GENERAL SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Streetwise" char="CUN" model={model.skills.streetwise} />
              <Skill name="Survival" char="CUN" model={model.skills.survival} />
              <Skill name="Vigilance" char="WIL" model={model.skills.vigilance} />
              <tr className="skill-head-title-row">
                <th className="skill-head-title-career" />
                <th className="skill-head-title-name">KNOWLEDGE SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Core Worlds" char="INT" model={model.skills.core_worlds} />
              <Skill name="Education" char="INT" model={model.skills.education} />
              <Skill name="Lore" char="INT" model={model.skills.lore} />
              <Skill name="Outer Rim" char="INT" model={model.skills.outer_rim} />
              <Skill name="Underworld" char="INT" model={model.skills.underworld} />
              <Skill name="Warfare" char="INT" model={model.skills.warfare} />
              <Skill name="Xenology" char="INT" model={model.skills.xenology} />
              <tr className="skill-head-title-row">
                <th className="skill-head-title-career" />
                <th className="skill-head-title-name">COMBAT SKILLS</th>
                <th className="skill-head-title-char">CHARS</th>
                <th className="skill-head-title-pool">POOL</th>
              </tr>
              <Skill name="Brawl" char="BR" model={model.skills.brawl} />
              <Skill name="Gunnery" char="AG" model={model.skills.gunnery} />
              <Skill name="Lightsaber" char="BR" model={model.skills.lightsaber} />
              <Skill name="Melee" char="BR" model={model.skills.melee} />
              <Skill name="Ranged - Heavy" char="AG" model={model.skills.ranged_heavy} />
              <Skill name="Ranged - Light" char="AG" model={model.skills.ranged_light} />
            </tbody>
          </table>
        </div>
        <div className="skill-divider">
          <Divider title="ABILITIES" />
        </div>
      </div>
    )
  }

  componentDidMount() {
    fetch("/models/skill_model.json")
      .then(respponse => respponse.json())
      .then(json => this.setState({ skillModel: json }));
      console.log("Skill page mounted");
  }

  render() {

    return this.renderBody(this.state.skillModel) ||
      <div className="container skill-root">
        <div className="spinner-position-box">
          <div className="spinner-border spinner-size" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(SkillPage);