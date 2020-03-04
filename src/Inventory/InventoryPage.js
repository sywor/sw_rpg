import React from 'react';
import {
  withRouter
} from "react-router-dom";

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
      <div className="container">
        <Divider title="WEAPONS" />
        {
          inventory.weapons.map((weapon) => {
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

            if (weapon === inventory.weapons[inventory.weapons.length - 1]) {
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
      </div>);
  }

  async componentDidMount() {
    let [inventory_model, weapon_models, armor_models] = await Promise.all([
      fetch("/models/inventory_model.json"),
      fetch("/models/weapon_models.json"),
      fetch("/models/armor_models.json")
    ]);

    let inventory = await inventory_model.json();
    let weapons = await weapon_models.json();
    let armors = await armor_models.json();

    this.setState({ inventory_model: inventory });
    this.setState({ base_weapons: weapons });
    this.setState({ base_armors: armors });
  }

  render() {
    var inventory = this.state.inventory_model;
    var weapons = this.state.base_weapons;
    var armors = this.state.base_armors;

    if (inventory && weapons && armors) {
      return this.renderBody(inventory, weapons, armors);
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

export default withRouter(InventoryPage);