import React from 'react';
import './Skill.css';

const career_checked = "./img/career_checked.svg";
const career_unchecked = "./img/career_unchecked.svg";
const skill_pool_empty = "./img/skill_pool_empty.svg";
const skill_pool_green_left = "./img/skill_pool_green_left.svg";
const skill_pool_green_right = "./img/skill_pool_green_left.svg";
const skill_pool_yellow = "./img/skill_pool_yellow.svg";

class Skill extends React.Component {
  render() {
    const career_skill = career_unchecked;

    if (this.props.career) {
      career_skill = career_checked;
    }

    return (
      <tr>
        <td>
          <img src={career_skill} className="career-skill" />
        </td>
        <td>
          <div className="skill-title">{this.props.name}</div>
        </td>
        <td>
          <div className="skill-char">{this.props.char}</div>
        </td>
        <td>
          <div className="pool-box">
            {this.props.pool.map((n) => {return this.renderPoolIcon(n)})}
          </div>
        </td>
      </tr>
    );
  }

  renderPoolIcon(i)
  {
    switch(i)
    {
      case 1:
        return <img src={skill_pool_yellow} className="pool-icon" />;
      case 2:
        return <img src={skill_pool_green_right} className="pool-icon" />;
      case 3:
        return <img src={skill_pool_green_left} className="pool-icon" />;
      default:
        return <img src={skill_pool_empty} className="pool-icon" />;
    }
  }
}

export default Skill;