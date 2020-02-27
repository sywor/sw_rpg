import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import PlayingMenu from './Menus/PlayingMenu';
import SkillPage from './Skills/SkillPage';

class App extends React.Component {

  constructor(prop) {
    super(prop);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="background">
          <div className="page-root-menu">
            <Switch>
              <Route path="/playing/">
                <PlayingMenu />
              </Route>
            </Switch>
          </div>
          <div className="page-background">
            <Switch>
              <Route path="/playing/character">

              </Route>
              <Route path="/playing/skills">
                <SkillPage />
              </Route>
              <Route path="/playing/combat">

              </Route>
              <Route path="/playing/inventory">

              </Route>
              <Route path="/playing/notes">

              </Route>
              <Route path="/playing/talent_trees">

              </Route>
              <Route path="/playing/ship">

              </Route>
            </Switch>
          </div>
        </div >
      </Router >
    );
  }

}

export default App;
