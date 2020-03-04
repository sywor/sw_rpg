import React from 'react';
import {
    withRouter
} from "react-router-dom";


import './PlayingMenu.css'

const buttonActive = "menu-button-content-selected";
const buttonInactive = "menu-button-content";

class PlayingMenu extends React.Component {

    render() {
        return (
            <div className="menu-box">
                <div className="menu-box-left">
                    <div>BUTTONS GOES HERE</div>
                </div>
                <div className="menu-box-center">
                    <div onClick={() => {
                        this.props.history.push("/playing/character");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/character" ? buttonActive : buttonInactive}>
                            Character
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.history.push("/playing/skills");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/skills" ? buttonActive : buttonInactive}>
                            Skills
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.history.push("/playing/combat");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/combat" ? buttonActive : buttonInactive}>
                            Combat
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.history.push("/playing/inventory");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/inventory" ? buttonActive : buttonInactive}>
                            Inventory
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.history.push("/playing/notes");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/notes" ? buttonActive : buttonInactive}>
                            Notes
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.history.push("/playing/talent_trees");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/talent_trees" ? buttonActive : buttonInactive}>
                            Talent Trees
                        </div>
                    </div>
                    <div onClick={() => {
                        this.props.history.push("/playing/ship");
                    }} className="std-font gray menu-button">
                        <div className={this.props.location.pathname === "/playing/ship" ? buttonActive : buttonInactive}>
                            Ship
                        </div>
                    </div>
                </div>
                <div className="menu-box-right">
                    <div>BUTTONS GOES HERE</div>
                </div>
            </div>
        )
    }
}

export default withRouter(PlayingMenu);