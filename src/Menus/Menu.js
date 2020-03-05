import React from 'react';
import {
    withRouter
} from "react-router-dom";


import './Menu.css'

const buttonActive = "menu-button-content-selected";
const buttonInactive = "menu-button-color";

class Menu extends React.Component {

    render() {

        var key_index = 0;
        return (
            <div className="flex-box menu-box">
                <div className="flex-box align-items-center">
                    <div>BUTTONS GOES HERE</div>
                </div>

                <div className="flex-box align-items-center">
                    {
                        this.props.buttons.map((btn) => {
                            key_index++;
                            return (
                                <div onClick={() => {
                                    this.props.history.push(btn.path);
                                }} className="std-font gray menu-button"
                                    key={key_index}>
                                    <div className={this.props.location.pathname === btn.path ? buttonActive : buttonInactive}>
                                        {btn.name}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="flex-box align-items-center">
                    <div>BUTTONS GOES HERE</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Menu);