import React from 'react';
import './Divider.css'

class Divider extends React.Component {
    render() {
        return (
            <div className="divider-box">
                <div className="divider-title">{this.props.title}</div>
                <div className="divider-separator-box">
                    <div className="divider-separator-title">{this.props.title}</div>
                    <hr className="divider-separator-line"/>
                </div>
            </div>
        )
    }
}

export default Divider;