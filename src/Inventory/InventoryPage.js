import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { enrichItem } from '../Common/CommonMethods';

import './InventoryPage.css';

import Divider from '../Common/Divider';
import Weapon from '../Common/WeaponComponent';
import Armor from '../Common/ArmorComponent';

class InventoryPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(inventory, weapons, armors) {

    var key_counter = 0;
    return (
      <div className="flex-box flex-column">
        <Divider title="WEAPONS" />
        {
          (() => {
            key_counter++;

            return weapons.map((weapon) => {
              key_counter++;
              if (weapon.id === inventory.weapons[inventory.weapons.length - 1].id) {
                return (
                  <div className="flex-box flex-column" key={key_counter}>
                    <div className="flex-box">
                      <Weapon weapon={weapon} />
                      <div className="flex-box" onClick={() => {
                        this.setState(oldState => {
                          let tmp = oldState.weapons.find(w => w.id === weapon.id);
                          tmp.equiped = !tmp.equiped;
                          return oldState;
                        });
                      }}>
                        {weapon.equiped
                          ? <i className="fas fa-sign-in-alt fa-2x equip-icon green" />
                          : <i className="fas fa-sign-out-alt fa-2x equip-icon red" />
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
                      <div className="flex-box" onClick={() => {
                        this.setState(oldState => {
                          let tmp = oldState.weapons.find(w => w.id === weapon.id);
                          tmp.equiped = !tmp.equiped;
                          return oldState;
                        });
                      }}>
                        {weapon.equiped
                          ? <i className="fas fa-sign-in-alt fa-2x equip-icon green" />
                          : <i className="fas fa-sign-out-alt fa-2x equip-icon red" />
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

            return armors.map((armor) => {
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
                          ? <i className="fas fa-sign-in-alt fa-2x equip-icon green" />
                          : <i className="fas fa-sign-out-alt fa-2x equip-icon red" />
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
                          ? <i className="fas fa-sign-in-alt fa-2x equip-icon green" />
                          : <i className="fas fa-sign-out-alt fa-2x equip-icon red" />
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

  async componentDidMount() {
    let [weapon_models, armor_models] = await Promise.all([
      fetch("/models/weapon_models.json"),
      fetch("/models/armor_models.json")
    ]);

    let weapons = await weapon_models.json();
    let armors = await armor_models.json();

    this.setState({ weapons: weapons });
    this.setState({ armors: armors });
  }

  render() {
    var inventory = this.props.inventory;
    var weapons = this.state.weapons;
    var armors = this.state.armors;

    if (inventory && weapons && armors) {

      let enriched_weapons = enrichItem(weapons, inventory.weapons);
      const enriched_armors = enrichItem(armors, inventory.armor);

      return this.renderBody(inventory, enriched_weapons, enriched_armors);
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
  return !state.inventory.isFetching ?
    {
      inventory: state.inventory
    } : {};
}

export default withRouter(connect(
  mapStateToProps,
  { }
)(InventoryPage));