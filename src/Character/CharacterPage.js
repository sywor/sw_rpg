import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CharacterPage.css';

import Divider from '../Utils/Divider';

const dots = " ..................................................................................................................................................................";

class CharacterPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderDescContent(title, content) {
    return (
      <div className="character-description-box character-font">
        <div className="character-description-title">{title}</div>
        <div className="character-description-content">{content + dots}</div>
      </div>
    )
  }

  renderObligationContent(content, key) {
    return (
      <div className="character-description-box character-font" key={key}>
        <div className="character-description-title">DESC</div>
        <div className="character-description-content right-margin">
          {content.description + dots}
        </div>
        <div className="character-description-title">SIZE</div>
        <div>{content.size}</div>
      </div>
    )
  }

  renderBody(model) {

    var key_counter = 0;

    return model && (
      <div className="character-box">
        <div className="avatar-box">
          <img src={model.description.avatar} />
        </div>
        <div className="description-box">
          <Divider title="DESCRIPTION" />
          {this.renderDescContent("NAME", model.description.name)}
          {this.renderDescContent("SPECIES", model.description.species)}
          {this.renderDescContent("CAREER", model.description.career)}
          <div className="description-box-row">
            <div className="description-box-col right-padding">
              {this.renderDescContent("GENDER", model.description.gender)}
              {this.renderDescContent("HEIGHT", model.description.height)}
              {this.renderDescContent("HAIR", model.description.hair)}
            </div>
            <div className="description-box-col">
              {this.renderDescContent("AGE", model.description.age)}
              {this.renderDescContent("BUILD", model.description.build)}
              {this.renderDescContent("EYES", model.description.eyes)}
            </div>
          </div>
          {this.renderDescContent("MOTIVATION", model.description.motivation)}
          <Divider title="OBLIGATION" />
          {model.obligations.map((n) => {
            key_counter++;
            return this.renderObligationContent(n, key_counter);
          })}
          <Divider title="MORALITY" />
          {this.renderDescContent("STRENGTH", model.moarality.strength)}
          {this.renderDescContent("WEAKNESS", model.moarality.weakness)}
          {this.renderDescContent("CONFLICT", model.moarality.conflict)}
          {this.renderDescContent("CURRENT", model.moarality.value)}
          <Divider title="EXPERIENCE" />
          {this.renderDescContent("TOTAL", model.experience.total)}
          {this.renderDescContent("AVAILABLE", model.experience.available)}
        </div>
        <div className="character-background-box">
          <Divider title="BACKGROUND" />
          <div className="character-font">{model.background}</div>
        </div>
      </div>)
  }

  componentDidMount() {
    fetch("/models/character_model.json")
      .then(respponse => respponse.json())
      .then(json => this.setState({ characterModel: json }));
  }

  render() {
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