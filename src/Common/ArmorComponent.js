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
            <div className="flex-box flex-column">
                <div className="flex-box refrigirator-font">
                    <div className="flex-box combat-desc-content-width">
                        <div className="combat-desc-title">NAME</div>
                        <div className="combat-desc-content">{this.props.armor.name}</div>
                        <div className="combat-desc-content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="combat-desc-title">DEFENCE</div>
                        <div className="combat-desc-content">{this.props.armor.defense}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">SOAK</div>
                        <div className="combat-desc-content">{this.props.armor.soak}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">ENC</div>
                        <div className="combat-desc-content">{this.props.armor.encumbrance}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="combat-desc-title">HP</div>
                        <div className="combat-desc-content">{this.props.armor.hard_points}</div>
                    </div>
                </div>
                <div className="flex-box refrigirator-font">
                    <div className="flex-box combat-desc-content-width">
                        <div className="combat-desc-title">SPECIAL</div>
                        <div className="combat-desc-content">{this.props.armor.special}</div>
                        <div className="combat-desc-content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="combat-desc-title">CONDITION</div>
                        <div className="combat-desc-content">
                            {this.props.armor.condition.map((n) => {
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

export default ArmorComponent;