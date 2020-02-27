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

    renderBody(model)
    {
      return model && (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="/img/zoma.png" className="avatar-box"/>
          </div>
          <div className="col">
            
          </div> 
        </div>
        </div>)
    }

    componentDidMount() {
      fetch("/models/character_model.json")
        .then(respponse => respponse.json())
        .then(json => this.setState({ characterModel: json }));
    }

    render(){
      return this.renderBody(this.state.characterModel) ||
      <div className="container skill-root">
        <div className="spinner-position-box">
          <div className="spinner-border spinner-size" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
      </div>;
    }
}

export default withRouter(CharacterPage);