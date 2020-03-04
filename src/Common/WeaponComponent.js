import React from 'react';

import { renderRedPoolIcon } from '../Common/CommonMethods';

import './CombatComponent.css';

class WeaponComponent extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {};
    }

    render() {

        var key_counter = 0;

        return (
            <div className="flex-box flex-column">
                <div className="flex-box std-font">
                    <div className="flex-box content-width-100">
                        <div className="gray">NAME</div>
                        <div className="content">{this.props.weapon.name}</div>
                        <div className="content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="gray">SKILL</div>
                        <div className="content">{this.props.weapon.skill}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">RANGE</div>
                        <div className="content">{this.props.weapon.range}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">DMG</div>
                        <div className="content">{this.props.weapon.damage}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">CRIT</div>
                        <div className="content">{this.props.weapon.critical}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">ENC</div>
                        <div className="content">{this.props.weapon.encumbrance}</div>
                    </div>
                    <div className="flex-box margin-left">
                        <div className="gray">HP</div>
                        <div className="content">{this.props.weapon.hard_points}</div>
                    </div>
                </div>
                <div className="flex-box std-font">
                    <div className="flex-box content-width-100">
                        <div className="gray">SPECIAL</div>
                        <div className="content">{this.props.weapon.special}</div>
                        <div className="content-dots"/>
                    </div>
                    <div className="flex-box margin-left-auto">
                        <div className="gray">CONDITION</div>
                        <div className="content">
                            {this.props.weapon.condition.map((n) => {
                                key_counter++;
                                return renderRedPoolIcon(n, key_counter)
                            })}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeaponComponent;