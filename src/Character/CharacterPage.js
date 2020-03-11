import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

import './CharacterPage.css';

import Divider from '../Common/Divider';
import Descriptor from '../Common/DescriptiveComponent';

class CharacterPage extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  renderBody(model) {

    var key_index = 0;

    return model && (
      <div className="character-box">
        <div className="flex-box content-width-50 justify-content-center">
          <img src={model.description.avatar} alt="avatar" />
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

            key_index++;

            return (
              <div className="flex-box" key={key_index}>
                <div className="flex-to-fit">
                  <Descriptor title={"DESC"} content={obligation.description} />
                </div>
                <div className="flex-box std-font">
                  <div className="gray">SIZE</div>
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
          <div className="std-font">{model.background}</div>
        </div>
      </div>)
  }

  render() {
    return this.renderBody(this.props.character) ||
      <div className="spinner-position-box">
        <div className="spinner-border spinner-size" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return !state.character.isFetching ?
    {
      character: state.character
    } : {};
}

export default withRouter(connect(
  mapStateToProps,
  {}
)(CharacterPage));