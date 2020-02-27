import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './TalentTreesPage.css';

class TalentTreesPage extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {};
    }

    render(){
        return (
            <div>
                TALENT TREES PAGE!!
            </div>
        )
    }
}

export default withRouter(TalentTreesPage);