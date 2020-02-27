import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './ShipPage.css';

class ShipPagePage extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {};
    }

    render(){
        return (
            <div>
                SHIP PAGE!!
            </div>
        )
    }
}

export default withRouter(ShipPagePage);