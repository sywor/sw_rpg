import React from 'react';

import './DescriptiveComponent.css';

const dots = " ..................................................................................................................................................................";

class DescriptiveComponent extends React.Component {

    render(){
        return (
            <div className="descriptive-box">
            <div className="descriptive-title">{this.props.title}</div>
            <div className="descriptive-content">{this.props.content + dots}</div>
          </div>
        )
    }
}

export default DescriptiveComponent;