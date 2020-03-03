import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CombatPage.css';

import Divider from '../Common/Divider';
import Weapon from '../Common/WeaponComponent';
import Armor from '../Common/ArmorComponent';

const empty_square = "/img/empty_square.svg";
const red_square = "/img/red_square.svg";

class CombatPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderCritInjuryIcon(value, key) {
    switch (value) {
      case 1:
        return <img src={red_square} className="pool-icon" key={key} />;
      default:
        return <img src={empty_square} className="pool-icon" key={key} />;
    }
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
            <Divider title="SOAK" subtitle={true} />
            <div className="flex-box flex-column combat-stats-component-center">
              <div className="title-gray refrigirator-font">VALUE</div>
              <div>{combat.combat_stats.soak}</div>
            </div>
            <Divider title="DEFENSE" subtitle={true} />
            <div className="flex-box">
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="title-gray refrigirator-font">MELEE</div>
                <div>{combat.combat_stats.defense.melee}</div>
              </div> <div className="flex-box flex-column combat-stats-component-center">
                <div className="title-gray refrigirator-font">RANGE</div>
                <div>{combat.combat_stats.defense.range}</div>
              </div>
            </div>
          </div>
          <div className="flex-box flex-column w25 combat-stats-component-padding">
            <Divider title="WOUNDS" subtitle={true} />
            <div className="flex-box">
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="title-gray refrigirator-font">THRESHOLD</div>
                <div>{combat.combat_stats.wounds.threshold}</div>
              </div> <div className="flex-box flex-column combat-stats-component-center">
                <div className="title-gray refrigirator-font">CURRENT</div>
                <div>{combat.combat_stats.wounds.current}</div>
              </div>
            </div>
            <Divider title="STRAIN" subtitle={true} />
            <div className="flex-box">
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="title-gray refrigirator-font">THRESHOLD</div>
                <div>{combat.combat_stats.strain.threshold}</div>
              </div> <div className="flex-box flex-column combat-stats-component-center">
                <div className="title-gray refrigirator-font">CURRENT</div>
                <div>{combat.combat_stats.strain.current}</div>
              </div>
            </div>
          </div>
          <div className="flex-box flex-column w50">
            <Divider title="CRITICAL INJURIES" subtitle={true} />
            {
              combat.critical_injuries.map((injury) => {
                return (
                  <div className="flex-box combat-desc-content-width">
                    {
                      injury.servierity.map((n) => {
                        key_counter++;
                        return this.renderCritInjuryIcon(n, key_counter);
                      })
                    }
                    <div className="combat-desc-content">{injury.description}</div>
                    <div className="combat-desc-content-dots" />
                  </div>);
              })
            }
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