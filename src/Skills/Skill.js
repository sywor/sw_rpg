import React from 'react';
import './Skill.css';

const career_checked = "/img/career_checked.svg";
const career_unchecked = "/img/career_unchecked.svg";
const skill_pool_empty = "/img/skill_pool_empty.svg";
const skill_pool_green_left = "/img/skill_pool_green_left.svg";
const skill_pool_green_right = "/img/skill_pool_green_right.svg";
const skill_pool_yellow = "/img/skill_pool_yellow.svg";

class Skill extends React.Component {
  render() {
    var career_skill = career_unchecked;

    if (this.props.model.career) {
      career_skill = career_checked;
    }

    var key_counter = 0;

    return (
      <tr>
        <td>
          <img src={career_skill} className="career-skill" alt="career_skill"/>
        </td>
        <td>
          <div className="std-font flex-box skill-title">
            <div className="flex-box content-width-100">
              <div className="gray">{this.props.name}</div>
              <div className="content-dots" />
            </div>
          </div>
        </td>
        <td>
          <div className="std-font gray skill-char">{this.props.char}</div>
        </td>
        <td>
          <div className="flex-box">
            {this.props.model.pool.map((n) => {
              key_counter++;
              return this.renderPoolIcon(n, key_counter)
            })}
          </div>
        </td>
      </tr>
    );
  }

  renderPoolIcon(i, key) {
    switch (i) {
      case 1:
        return <img src={skill_pool_yellow} className="pool-icon" key={key} alt="skill_pool_yellow"/>;
      case 2:
        return <img src={skill_pool_green_right} className="pool-icon" key={key} alt="skill_pool_green_right"/>;
      case 3:
        return <img src={skill_pool_green_left} className="pool-icon" key={key} alt="skill_pool_green_left"/>;
      default:
        return <img src={skill_pool_empty} className="pool-icon" key={key} alt="skill_pool_empty"/>;
    }
  }
}

export default Skill;