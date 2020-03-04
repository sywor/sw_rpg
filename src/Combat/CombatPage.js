import React from 'react';
import {
  withRouter
} from "react-router-dom";
import { renderRedPoolIcon, enrichItem } from '../Common/CommonMethods';

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
      <div>
        <Divider title="WEAPONS" />
        {
          (() => {
            const enriched = enrichItem(weapons, combat.weapons);
            key_counter++;

            return enriched.map((weapon) => {
              if (weapon.key === combat.weapons[combat.weapons.length - 1].key) {
                return (<Weapon weapon={weapon} key={key_counter} />);
              }
              else {
                return (
                  <div>
                    <Weapon weapon={weapon} key={key_counter} />
                    <hr className="divider-separator-line thin-line combat-weapons-margin" />
                  </div>);
              }
            })
          })()
        }
        <div className="combat-title-margin">
          <Divider title="ARMOR" />
        </div>
        {
          (() => {
            const enriched = enrichItem(armors, combat.armor);
            key_counter++;

            return enriched.map((armor) => {
              if (armor.key === combat.armor[combat.armor.length - 1].key) {
                return (<Armor armor={armor} key={key_counter} />);
              }
              else {
                return (
                  <div>
                    return (<Armor armor={armor} key={key_counter} />);
                    <hr className="divider-separator-line thin-line combat-weapons-margin" />
                  </div>);
              }
            })
          })()
        }
        <div className="combat-title-margin">
          <Divider title="STATS" />
        </div>
        <div className="flex-box">
          <div className="flex-box flex-column w25 combat-stats-component-padding">
            <Divider title="SOAK" subtitle={true} />
            <div className="flex-box flex-column combat-stats-component-center">
              <div className="std-font gray">VALUE</div>
              <div>{combat.combat_stats.soak}</div>
            </div>
            <Divider title="DEFENSE" subtitle={true} />
            <div className="flex-box justify-content-space-evenly">
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="std-font gray">MELEE</div>
                <div>{combat.combat_stats.defense.melee}</div>
              </div>
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="std-font gray">RANGE</div>
                <div>{combat.combat_stats.defense.range}</div>
              </div>
            </div>
          </div>
          <div className="flex-box flex-column w25 combat-stats-component-padding">
            <Divider title="WOUNDS" subtitle={true} />
            <div className="flex-box justify-content-space-evenly">
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="std-font gray">THRESHOLD</div>
                <div>{combat.combat_stats.wounds.threshold}</div>
              </div>
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="std-font gray">CURRENT</div>
                <div>{combat.combat_stats.wounds.current}</div>
              </div>
            </div>
            <Divider title="STRAIN" subtitle={true} />
            <div className="flex-box justify-content-space-evenly">
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="std-font gray">THRESHOLD</div>
                <div>{combat.combat_stats.strain.threshold}</div>
              </div>
              <div className="flex-box flex-column combat-stats-component-center">
                <div className="std-font gray">CURRENT</div>
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
                        return renderRedPoolIcon(n, key_counter);
                      })
                    }
                    <div className="flex-box std-font gray content-width-100">
                      <div className="flex-box content-width-100">
                        <div className="content">{injury.description}</div>
                        <div className="content-dots" />
                      </div>
                    </div>
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