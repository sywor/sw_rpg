import React from 'react';
import './Divider.css'

class Divider extends React.Component {
    render() {
        return (
            <div className="divider-box">
                <div className={
                    (() => {
                        return this.props.subtitle === true ?
                        "divider-title std-font gray sub" :
                        "divider-title std-font gray main";
                    })()
                    }>{this.props.title}</div>
                <div className="divider-separator-box">
                    <div className={
                    (() => {
                        return this.props.subtitle === true ?
                        "divider-separator-title sub" :
                        "divider-separator-title main";
                    })()
                    }>{this.props.title}</div>
                    <hr className={
                    (() => {
                        return this.props.subtitle === true ?
                        "divider-separator-line sub" :
                        "divider-separator-line main";
                    })()
                    }/>
                </div>
            </div>
        )
    }
}

export default Divider;