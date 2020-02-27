import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './NotesPage.css';

class NotesPage extends React.Component {

    constructor(prop) {
      super(prop);
      this.state = {};
    }

    render(){
        return (
            <div>
                NOTES PAGE!!
            </div>
        )
    }
}

export default withRouter(NotesPage);