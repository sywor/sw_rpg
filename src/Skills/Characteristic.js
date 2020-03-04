import React from 'react';
import './Characteristic.css'

class Characteristic extends React.Component {
    render() {
        return (
            <div className="characteristic-frame">
                <div className="container">
                    <div className="characteristic-value-box">
                        <div className="std-font gray characteristic-value">
                            {this.props.value}
                        </div>
                    </div>
                    <div className="characteristic-title-box">
                        <div className="std-font gray characteristic-title">{this.props.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Characteristic;