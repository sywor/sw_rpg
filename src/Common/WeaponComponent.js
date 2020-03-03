import React from 'react';

import './CombatComponent.css';

const empty_square = "/img/empty_square.svg";
const red_square = "/img/red_square.svg";
const dots = " ..................................................................................................................................................................................................................................................................................................";

class WeaponComponent extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {};
    }

    render() {

        var key_counter = 0;

        return (
            <div className="flex-box flex-column">
                <div className="flex-box refrigirator-font">
                    <div className="flex-box combat-desc-content-width">
                        <div className="combat-desc-title">NAME</div>
                        <div className="combat-desc-content">{this.props.weapon.name}</div>
                        <div className="combat-desc-content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="combat-desc-title">SKILL</div>
                        <div className="combat-desc-content">{this.props.weapon.skill}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">RANGE</div>
                        <div className="combat-desc-content">{this.props.weapon.range}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">DMG</div>
                        <div className="combat-desc-content">{this.props.weapon.damage}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">CRIT</div>
                        <div className="combat-desc-content">{this.props.weapon.critical}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">ENC</div>
                        <div className="combat-desc-content">{this.props.weapon.encumbrance}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">HP</div>
                        <div className="combat-desc-content">{this.props.weapon.hard_points}</div>
                    </div>
                </div>
                <div className="flex-box refrigirator-font">
                    <div className="flex-box combat-desc-content-width">
                        <div className="combat-desc-title">SPECIAL</div>
                        <div className="combat-desc-content">{this.props.weapon.special}</div>
                        <div className="combat-desc-content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="combat-desc-title">CONDITION</div>
                        <div className="combat-desc-content">
                            {this.props.weapon.condition.map((n) => {
                                key_counter++;
                                return this.renderConditionIcon(n, key_counter)
                            })}</div>
                    </div>
                </div>
            </div>
        )
    }

    renderConditionIcon(value, key) {
        switch (value) {
            case 1:
                return <img src={red_square} className="pool-icon" key={key} />;
            default:
                return <img src={empty_square} className="pool-icon" key={key} />;
        }
    }
}

export default WeaponComponent;