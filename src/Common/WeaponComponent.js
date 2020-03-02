import React from 'react';

import './WeaponComponent.css';

const empty_square = "/img/empty_square.svg";
const red_square = "/img/red_square.svg";

class WeaponComponent extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {};
    }

    render() {

        var key_counter = 0;

        return (
            <div className="weapon-root-box">
                <div className="weapon-row">
                    <div className="weapon-desc-box">
                        <div className="weapon-desc-title">NAME:</div>
                        <div className="weapon-desc-content">{this.props.weapon.name}</div>
                    </div>
                    <div className="weapon-desc-box margin-left-auto">
                        <div className="weapon-desc-title">SKILL:</div>
                        <div className="weapon-desc-content">{this.props.weapon.skill}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">RANGE:</div>
                        <div className="weapon-desc-content">{this.props.weapon.range}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">DMG:</div>
                        <div className="weapon-desc-content">{this.props.weapon.damage}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">CRIT:</div>
                        <div className="weapon-desc-content">{this.props.weapon.critical}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">ENC:</div>
                        <div className="weapon-desc-content">{this.props.weapon.encumbrance}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">HP:</div>
                        <div className="weapon-desc-content">{this.props.weapon.hard_points}</div>
                    </div>
                </div>
                <div className="weapon-row">
                    <div className="weapon-desc-box">
                        <div className="weapon-desc-title">SPECIAL:</div>
                        <div className="weapon-desc-content">{this.props.weapon.special}</div>
                    </div>
                    <div className="weapon-desc-box margin-left-auto">
                        <div className="weapon-desc-title">CONDITION</div>
                        <div className="weapon-desc-content">
                            {this.props.weapon.condition.map((n) => {
                                key_counter++;
                                return this.renderConditionIcon(n, key_counter)
                            })}</div>
                    </div>
                </div>
                <hr className="divider-separator-line" />
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