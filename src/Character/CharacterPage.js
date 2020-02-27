import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CharacterPage.css';

class CharacterPage extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {};
    }

    render(){
        return (
            <div>
                CHARACTER PAGE!!
            </div>
        )
    }
}

export default withRouter(CharacterPage);