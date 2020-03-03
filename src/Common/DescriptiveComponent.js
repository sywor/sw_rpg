import React from 'react';

import './DescriptiveComponent.css';

const dots = " ..................................................................................................................................................................";

class DescriptiveComponent extends React.Component {

    render() {
        return (
            <div className="refrigirator-font flex-box">
                <div className="flex-box content-width-100">
                    <div className="title-gray">{this.props.title}</div>
                    <div className="content">{this.props.content}</div>
                    <div className="content-dots" />
                </div>
            </div>
        )
    }
}

export default DescriptiveComponent;