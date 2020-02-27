import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CombatPage.css';

class CombatPage extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {};
    }

    render(){
        return (
            <div>
                COMBAT PAGE!!
            </div>
        )
    }
}

export default withRouter(CombatPage);