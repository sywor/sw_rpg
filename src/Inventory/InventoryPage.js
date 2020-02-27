import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './InventoryPage.css';

class InventoryPage extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {};
    }

    render(){
        return (
            <div>
                INVENTORY PAGE!!
            </div>
        )
    }
}

export default withRouter(InventoryPage);