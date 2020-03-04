import React from 'react';

class DescriptiveComponent extends React.Component {

    render() {
        return (
            <div className="std-font flex-box">
                <div className="flex-box content-width-100">
                    <div className="gray">{this.props.title}</div>
                    <div className="content">{this.props.content}</div>
                    <div className="content-dots" />
                </div>
            </div>
        )
    }
}

export default DescriptiveComponent;