import React from 'react';
import {
    withRouter
} from "react-router-dom";


import './PlayingMenu.css'

const buttonActive = "menu-button-content-selected";
const buttonInactive = "menu-button-content";

class PlayingMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeButton: 0 };
    }

    render() {
        return (
            <div className="menu-box">
                <div className="menu-box-left">
                    <div>BUTTONS GOES HERE</div>
                </div>
                <div className="menu-box-center">
                    <div onClick={() => {
                        this.setState({ activeButton: 0 });
                        this.props.history.push("/playing/character");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 0 ? buttonActive : buttonInactive}>
                            Character
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 1 });
                        this.props.history.push("/playing/skills");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 1 ? buttonActive : buttonInactive}>
                            Skills
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 2 });
                        this.props.history.push("/playing/combat");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 2 ? buttonActive : buttonInactive}>
                            Combat
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 3 });
                        this.props.history.push("/playing/inventory");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 3 ? buttonActive : buttonInactive}>
                            Inventory
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 4 });
                        this.props.history.push("/playing/notes");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 4 ? buttonActive : buttonInactive}>
                            Notes
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 5 });
                        this.props.history.push("/playing/talent_trees");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 5 ? buttonActive : buttonInactive}>
                            Talent Trees
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 6 });
                        this.props.history.push("/playing/ship");
                    }} className="menu-button">
                        <div className={this.state.activeButton === 6 ? buttonActive : buttonInactive}>
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