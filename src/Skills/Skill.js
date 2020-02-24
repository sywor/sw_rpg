import React from 'react';
import './Skill.css';

class Skill extends React.Component {
    render() {
      return (
      <div>
          {this.props.name}          
      </div>);
    }
  }
  
  export default Skill;