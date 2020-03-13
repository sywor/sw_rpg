import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { renderRedPoolIcon, enrichItem } from '../Common/CommonMethods';
import baseData from '../Redux/baseData';

import './CombatPage.css';

import Divider from '../Common/Divider';
import Weapon from '../Common/WeaponComponent';
import Armor from '../Common/ArmorComponent';

class CombatPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(inventory, combat) {

    let equipedWeapon = inventory.weapon.filter(weapon => weapon.equiped);
    let equipedArmor = inventory.armor.filter(armor => armor.equiped);
    let key_counter = 0;

    return (
      <div>
        <Divider title="WEAPONS" />
        {
          (() => {
            return equipedWeapon.map((weapon) => {
              key_counter++;
              if (weapon.id === equipedWeapon[equipedWeapon.length - 1].id) {
                return (<Weapon weapon={weapon} key={key_counter} />);
              }
              else {
                return (
                  <div key={key_counter}>
                    <Weapon weapon={weapon} />
                    <hr className="divider-separator-line thin-line" />
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
            return equipedArmor.map((armor) => {
              key_counter++;
              if (armor.id === equipedArmor[equipedArmor.length - 1].id) {
                return (<Armor armor={armor} key={key_counter} />);
              }
              else {
                return (
                  <div key={key_counter}>
                    <Armor armor={armor} />
                    <hr className="divider-separator-line thin-line" />
                  </div>);
              }
            })
          })()
        }
        <div className="combat-title-margin">
          <Divider title="STATS" />
        </div>
        <div className="flex-box">
          <div className="flex-box flex-column combat-stats-component-padding flex-to-fit">
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
          <div className="flex-box flex-column combat-stats-component-padding flex-to-fit">
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
          <div className="flex-box flex-column flex-to-fit">
            <Divider title="CRITICAL INJURIES" subtitle={true} />
            {
              combat.critical_injuries.map((injury) => {
                key_counter++;
                return (
                  <div className="flex-box combat-desc-content-width" key={key_counter}>
                    {
                      injury.servierity.map((n) => {
                        key_counter++;
                        return renderRedPoolIcon(n, key_counter);
                      })
                    }
                    <div className="flex-box std-font gray content-width-100">
                      <div className="flex-box content-width-100">
                        <div className="content">{injury.description}</div>
                        <div className="content-dots combat-critical-injury-dots" />
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

  render() {

    var inventory = this.props.inventory;
    var combat = this.props.combat;

    if (inventory && combat) {
      return this.renderBody(inventory, combat);
    }
    else {
      return (
        <div className="spinner-position-box">
          <div className="spinner-border spinner-size" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {

  if (!state.combat.isFetching && !state.inventory.isFetching) {

    const enriched_weapons = enrichItem(baseData.weapons, state.inventory.weapons);
    const enriched_armors = enrichItem(baseData.armor, state.inventory.armor);

    return {
      combat: state.combat,
      inventory: {
        ...state.inventory,
        weapons: enriched_weapons,
        armor: enriched_armors
      }
    };
  }
  return {};
}

export default withRouter(connect(
  mapStateToProps,
  {}
)(CombatPage));