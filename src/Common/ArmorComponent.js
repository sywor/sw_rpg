import React from 'react';

import { renderRedPoolIcon } from '../Common/CommonMethods';

import './CombatComponent.css';

class ArmorComponent extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {};
    }

    render() {

        var key_counter = 0;

        return (
            <div className="flex-box flex-column content-width-100">
                <div className="flex-box std-font">
                    <div className="flex-box content-width-100">
                        <div className="gray">NAME</div>
                        <div className="content">{this.props.armor.name}</div>
                        <div className="content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="gray">DEFENCE</div>
                        <div className="content">{this.props.armor.defense}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">SOAK</div>
                        <div className="content">{this.props.armor.soak}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">ENC</div>
                        <div className="content">{this.props.armor.encumbrance}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">HP</div>
                        <div className="content">{this.props.armor.hard_points}</div>
                    </div>
                </div>
                <div className="flex-box std-font combat-margin-top">
                    <div className="flex-box content-width-100">
                        <div className="gray">SPECIAL</div>
                        <div className="content">{this.props.armor.special}</div>
                        <div className="content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="gray">CONDITION</div>
                        <div className="content">
                            {this.props.armor.condition.map((n) => {
                                key_counter++;
                                return renderRedPoolIcon(n, key_counter)
                            })}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArmorComponent;