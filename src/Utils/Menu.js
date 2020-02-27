import React from 'react';
import './Menu.css'

const buttonActive = "menu-button-content-selected";
const buttonInactive = "menu-button-content";

class Menu extends React.Component {

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
                        this.props.activePageCallback(0);
                    }} className="menu-button">
                        <div className={this.state.activeButton === 0 ? buttonActive : buttonInactive}>
                            Character
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 1 });
                        this.props.activePageCallback(1);
                    }} className="menu-button">
                        <div className={this.state.activeButton === 1 ? buttonActive : buttonInactive}>
                            Skills
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 2 });
                        this.props.activePageCallback(2);
                    }} className="menu-button">
                        <div className={this.state.activeButton === 2 ? buttonActive : buttonInactive}>
                            Combat
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 3 });
                        this.props.activePageCallback(3);
                    }} className="menu-button">
                        <div className={this.state.activeButton === 3 ? buttonActive : buttonInactive}>
                            Inventory
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 4 });
                        this.props.activePageCallback(4);
                    }} className="menu-button">
                        <div className={this.state.activeButton === 4 ? buttonActive : buttonInactive}>
                            Notes
                        </div>
                    </div>
                    <div onClick={() => {
                        this.setState({ activeButton: 5 });
                        this.props.activePageCallback(5);
                    }} className="menu-button">
                        <div className={this.state.activeButton === 5 ? buttonActive : buttonInactive}>
                            Talent Trees
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

export default Menu;