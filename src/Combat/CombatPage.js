import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CombatPage.css';

import Divider from '../Common/Divider';
import Weapon from '../Common/WeaponComponent';

class CombatPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(combat, base) {

    var key_counter = 0;
    return (
      <div className="container">
        <Divider title="WEAPONS" />
        {
          combat.weapons.map((weapon) => {
            var weapon_base = base[weapon.weapon_key];

            for (var key of Object.keys(weapon.modification)) {
              if (weapon_base.hasOwnProperty(key)) {
                if (typeof weapon_base[key] === 'string') {
                  weapon_base[key] += " " + weapon.modification[key];
                }
                else {
                  weapon_base[key] += weapon.modification[key];
                }
              }
            }

            weapon_base["condition"] = weapon["condition"];
            key_counter++;

            return (<Weapon weapon={weapon_base} key={key_counter} />);
          })}
          <Divider title="ARMOR" />
          <Divider title="STATS" />
      </div>
    );
  }

  async componentDidMount() {
    let [combat_model, weapon_models] = await Promise.all([
      fetch("/models/combat_model.json"),
      fetch("/models/weapon_models.json")
    ]);

    let combat = await combat_model.json();
    let base = await weapon_models.json();

    this.setState({ combat_model: combat });
    this.setState({ base_weapons: base });
  }

  render() {

    var combat = this.state.combat_model;
    var base = this.state.base_weapons;

    if (combat && base) {
      return this.renderBody(combat, base);
    }
    else {
      return (
        <div className="container skill-root">
          <div className="spinner-position-box">
            <div className="spinner-border spinner-size" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(CombatPage);