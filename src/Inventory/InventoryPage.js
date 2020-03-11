import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { enrichItem } from '../Common/CommonMethods';
import { toggleWeapon } from '../Redux/Actions/InventoryActions';
import baseData from '../Redux/baseData';

import './InventoryPage.css';

import Divider from '../Common/Divider';
import Weapon from '../Common/WeaponComponent';
import Armor from '../Common/ArmorComponent';

class InventoryPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(inventory) {

    var key_counter = 0;
    return (
      <div className="flex-box flex-column">
        <Divider title="WEAPONS" />
        {
          (() => {
            key_counter++;

            return inventory.weapons.map((weapon) => {
              key_counter++;
              if (weapon.id === inventory.weapons[inventory.weapons.length - 1].id) {
                return (
                  <div className="flex-box flex-column" key={key_counter}>
                    <div className="flex-box">
                      <Weapon weapon={weapon} />
                      <div className="flex-box" onClick={() => { this.props.toggleWeaponClick(weapon.id) }}>
                        {weapon.equiped
                          ? <i className="fas fa-sign-out-alt fa-2x equip-icon equpied" />
                          : <i className="fas fa-sign-in-alt fa-2x equip-icon unequpied" />
                        }
                      </div>
                    </div>
                  </div>
                );
              }
              else {
                return (
                  <div className="flex-box flex-column" key={key_counter}>
                    <div className="flex-box">
                      <Weapon weapon={weapon} />
                      <div className="flex-box" onClick={() => { this.props.toggleWeaponClick(weapon.id) }}>
                        {weapon.equiped
                          ? <i className="fas fa-sign-out-alt fa-2x equip-icon equpied" />
                          : <i className="fas fa-sign-in-alt fa-2x equip-icon unequpied" />
                        }
                      </div>
                    </div>
                    <hr className="divider-separator-line thin-line" />
                  </div>);
              }
            })
          })()
        }
        <div className="margin-top">
          <Divider title="ARMOR" />
        </div>
        {
          (() => {

            key_counter++;

            return inventory.armor.map((armor) => {
              key_counter++;
              if (armor.id === inventory.armor[inventory.armor.length - 1].id) {
                return (
                  <div className="flex-box flex-column" key={key_counter}>
                    <div className="flex-box">
                      <Armor armor={armor} />
                      <div className="flex-box" onClick={() => {
                        this.setState(oldState => {
                          let tmp = oldState.armors.find(a => a.id === armor.id);
                          tmp.equiped = !tmp.equiped;
                          return oldState;
                        });
                      }}>
                        {armor.equiped
                          ? <i className="fas fa-sign-out-alt fa-2x equip-icon equpied" />
                          : <i className="fas fa-sign-in-alt fa-2x equip-icon unequpied" />
                        }
                      </div>
                    </div>
                  </div>
                );
              }
              else {
                return (
                  <div className="flex-box flex-column" key={key_counter}>
                    <div className="flex-box">
                      <Armor armor={armor} />
                      <div className="flex-box" onClick={() => {
                        this.setState(oldState => {
                          let tmp = oldState.armors.find(a => a.id === armor.id);
                          tmp.equiped = !tmp.equiped;
                          return oldState;
                        });
                      }}>
                        {armor.equiped
                          ? <i className="fas fa-sign-out-alt fa-2x equip-icon equpied" />
                          : <i className="fas fa-sign-in-alt fa-2x equip-icon unequpied" />
                        }
                      </div>
                    </div>
                    <hr className="divider-separator-line thin-line" />
                  </div>
                );
              }
            })
          })()
        }
        <div className="margin-top">
          <Divider title="ITEMS" />
        </div>
      </div >);
  }
  render() {

    var inventory = this.props.inventory;

    if (inventory) {
      return this.renderBody(inventory);
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

  if (!state.inventory.isFetching) {

    const enriched_weapons = enrichItem(baseData.weapons, state.inventory.weapons);
    const enriched_armors = enrichItem(baseData.armor, state.inventory.armor);

    return {
      inventory: { 
        ...state.inventory, 
        weapons: enriched_weapons, 
        armor: enriched_armors }
    };
  }
  return {};
}

export default withRouter(connect(
  mapStateToProps,
  { toggleWeaponClick: toggleWeapon }
)(InventoryPage));