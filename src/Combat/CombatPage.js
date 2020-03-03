import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CombatPage.css';

import Divider from '../Common/Divider';
import Weapon from '../Common/WeaponComponent';
import Armor from '../Common/ArmorComponent';

class CombatPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(combat, weapons, armors) {

    var key_counter = 0;
    return (
      <div className="container">
        <Divider title="WEAPONS" />
        {
          combat.weapons.map((weapon) => {
            var weapon_base = weapons[weapon.weapon_key];

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

            if (weapon === combat.weapons[combat.weapons.length - 1]) {
              return (<Weapon weapon={weapon_base} key={key_counter} />);
            }
            else {
              return (
                <div>
                  <Weapon weapon={weapon_base} key={key_counter} />
                  <hr className="divider-separator-line thin-line combat-weapons-margin" />
                </div>);
            }
          })}
        <div className="combat-title-margin">
          <Divider title="ARMOR" />
        </div>
        {
          (() => {

            var armor_base = armors[combat.armor.armor_key];

            for (var key of Object.keys(combat.armor.modification)) {
              if (armor_base.hasOwnProperty(key)) {
                if (typeof armor_base[key] === 'string') {
                  armor_base[key] += " " + combat.armor.modification[key];
                }
                else {
                  armor_base[key] += combat.armor.modification[key];
                }
              }
            }

            armor_base["condition"] = combat.armor["condition"];
            return (<Armor armor={armor_base} />);
          })()
        }
        <div className="combat-title-margin">
          <Divider title="STATS" />
        </div>
        <div className="flex-box">
          <div className="flex-box flex-column w25 combat-stats-component-padding">
          <Divider title="SOAK" subtitle={true}/>
          </div>
          <div className="flex-box flex-column w25 combat-stats-component-padding">
          <Divider title="WOUNDS" subtitle={true}/>
          </div>
          <div className="flex-box flex-column w50">
          <Divider title="CRITICAL INJURIES" subtitle={true}/>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let [combat_model, weapon_models, armor_models] = await Promise.all([
      fetch("/models/combat_model.json"),
      fetch("/models/weapon_models.json"),
      fetch("/models/armor_models.json")
    ]);

    let combat = await combat_model.json();
    let weapons = await weapon_models.json();
    let armors = await armor_models.json();

    this.setState({ combat_model: combat });
    this.setState({ base_weapons: weapons });
    this.setState({ base_armors: armors });
  }

  render() {

    var combat = this.state.combat_model;
    var weapons = this.state.base_weapons;
    var armors = this.state.base_armors;

    if (combat && weapons && armors) {
      return this.renderBody(combat, weapons, armors);
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