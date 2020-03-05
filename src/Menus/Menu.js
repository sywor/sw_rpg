import React from 'react';
import { withRouter } from "react-router-dom";

import './Menu.css'

import Dropdown from './Dropdown'

const buttonActive = "menu-button-content-selected";
const buttonInactive = "menu-button-color";

class Menu extends React.Component {

    constructor(prop) {
        super(prop);
        this.state = {
            left_menu: [
                {
                    id: 0,
                    title: 'Start',
                    path: "/",
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Play',
                    path: "/playing/",
                    selected: false,
                },
                {
                    id: 2,
                    title: 'New character',
                    path: "/create/",
                    selected: false,
                },
                {
                    id: 3,
                    title: 'GM',
                    path: "/manage/",
                    selected: false,
                }
            ],
            right_menu: [
                {
                    id: 0,
                    title: 'Start',
                    path: "/",
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Play',
                    path: "/playing/",
                    selected: false,
                },
                {
                    id: 2,
                    title: 'New character',
                    path: "/create/",
                    selected: false,
                },
                {
                    id: 3,
                    title: 'GM',
                    path: "/manage/",
                    selected: false,
                }
            ]
        };
    }

    leftMenuClick = (id) => {
        this.state.left_menu.forEach(item => item.selected = item.id === id);
        this.props.history.push(this.state.left_menu[id].path);
    }

    rightMenuClick = (id) => {
        this.state.right_menu.forEach(item => item.selected = item.id === id);
        this.props.history.push(this.state.right_menu[id].path);
    }

    render() {

        var key_index = 0;
        return (
            <div className="flex-box menu-box">
                <div className="flex-box align-items-center">
                    <Dropdown
                        title="Main"
                        list={this.state.left_menu}
                        menuClick={this.leftMenuClick}
                    />
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
                    <Dropdown
                        title="[Player name]"
                        list={this.state.right_menu}
                        resetThenSet={this.rightMenuClick}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(Menu);