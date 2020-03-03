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
                    <div className="flex-box content-width-100">
                        <div className="title-gray">NAME</div>
                        <div className="content">{this.props.armor.name}</div>
                        <div className="content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="title-gray">DEFENCE</div>
                        <div className="content">{this.props.armor.defense}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="title-gray">SOAK</div>
                        <div className="content">{this.props.armor.soak}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="title-gray">ENC</div>
                        <div className="content">{this.props.armor.encumbrance}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="title-gray">HP</div>
                        <div className="content">{this.props.armor.hard_points}</div>
                    </div>
                </div>
                <div className="flex-box refrigirator-font">
                    <div className="flex-box content-width-100">
                        <div className="title-gray">SPECIAL</div>
                        <div className="content">{this.props.armor.special}</div>
                        <div className="content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="title-gray">CONDITION</div>
                        <div className="content">
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