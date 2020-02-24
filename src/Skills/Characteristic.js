import React from 'react';
import './Characteristic.css'

class Characteristic extends React.Component {
    render() {
        return (
            <div className="characteristic-frame">
                <div className="container">
                    <div className="characteristic-value-box">
                        <div className="characteristic-value">
                            {this.props.value}
                        </div>
                    </div>
                    <div className="characteristic-title-box">
                        <h5 className="characteristic-title">{this.props.name}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Characteristic;