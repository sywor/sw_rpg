import React from 'react';
import {
  withRouter
} from "react-router-dom";

import './CharacterPage.css';

import Divider from '../Common/Divider';
import Descriptor from '../Common/DescriptiveComponent';

class CharacterPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(model) {

    return model && (
      <div className="character-box">
        <div className="flex-box content-width-50 justify-content-center">
          <img src={model.description.avatar} />
        </div>
        <div className="flex-box content-width-50 flex-column">
          <Divider title="DESCRIPTION" />
          <Descriptor title={"NAME"} content={model.description.name} />
          <Descriptor title={"SPECIES"} content={model.description.species} />
          <Descriptor title={"CAREER"} content={model.description.career} />
          <div className="flex-box">
            <div className="content-width-50 right-padding">
              <Descriptor title={"GENDER"} content={model.description.gender} />
              <Descriptor title={"HEIGHT"} content={model.description.height} />
              <Descriptor title={"HAIR"} content={model.description.hair} />
            </div>
            <div className="content-width-50">
              <Descriptor title={"AGE"} content={model.description.age} />
              <Descriptor title={"BUILD"} content={model.description.build} />
              <Descriptor title={"EYES"} content={model.description.eyes} />
            </div>
          </div>
          <Descriptor title={"MOTIVATION"} content={model.description.motivation} />
          <Divider title="OBLIGATION" />
          {model.obligations.map((obligation) => {
            return (
              <div className="flex-box">
                <div className="flex-grow">
                  <Descriptor title={"DESC"} content={obligation.description} />
                </div>
                <div className="flex-box refrigirator-font">
                  <div className="title-gray">SIZE</div>
                  <div className="content">{obligation.size}</div>
                </div>
              </div>);
          })}
          <Divider title="MORALITY" />
          <Descriptor title={"STRENGTH"} content={model.morality.strength} />
          <Descriptor title={"WEAKNESS"} content={model.morality.weakness} />
          <Descriptor title={"CONFLICT"} content={model.morality.conflict} />
          <Descriptor title={"CURRENT"} content={model.morality.value} />
          <Divider title="EXPERIENCE" />
          <Descriptor title={"TOTAL"} content={model.experience.total} />
          <Descriptor title={"AVAILABLE"} content={model.experience.available} />
        </div>
        <div className="content-width-100">
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