import React from 'react';

import './CombatComponent.css';

const empty_square = "/img/empty_square.svg";
const red_square = "/img/red_square.svg";

class ArmorComponent extends React.Component {

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
                        <div className="weapon-desc-content">{this.props.armor.name}</div>
                    </div>
                    <div className="weapon-desc-box margin-left-auto">
                        <div className="weapon-desc-title">DEFENCE:</div>
                        <div className="weapon-desc-content">{this.props.armor.skill}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">SOAK:</div>
                        <div className="weapon-desc-content">{this.props.armor.range}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">ENC:</div>
                        <div className="weapon-desc-content">{this.props.armor.encumbrance}</div>
                    </div>
                    <div className="weapon-desc-box margin-left">
                        <div className="weapon-desc-title">HP:</div>
                        <div className="weapon-desc-content">{this.props.armor.hard_points}</div>
                    </div>
                </div>
                <div className="weapon-row">
                    <div className="weapon-desc-box">
                        <div className="weapon-desc-title">SPECIAL:</div>
                        <div className="weapon-desc-content">{this.props.armor.special}</div>
                    </div>
                    <div className="weapon-desc-box margin-left-auto">
                        <div className="weapon-desc-title">CONDITION</div>
                        <div className="weapon-desc-content">
                            {this.props.armor.condition.map((n) => {
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

export default ArmorComponent;