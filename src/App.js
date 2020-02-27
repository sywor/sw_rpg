import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import PlayingMenu from './Menus/PlayingMenu';
import CharacterPage from './Character/CharacterPage'
import SkillPage from './Skills/SkillPage';
import CombatPage from './Combat/CombatPage'
import InventoryPage from './Inventory/InventoryPage'
import NotesPage from './Notes/NotePage'
import TalentTreesPage from './TalentTrees/TalentTreesPage'
import ShipPagePage from './Ship/ShipPage'

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
                <CharacterPage />
              </Route>
              <Route path="/playing/skills">
                <SkillPage />
              </Route>
              <Route path="/playing/combat">
                <CombatPage />
              </Route>
              <Route path="/playing/inventory">
                <InventoryPage />
              </Route>
              <Route path="/playing/notes">
                <NotesPage />
              </Route>
              <Route path="/playing/talent_trees">
                <TalentTreesPage />
              </Route>
              <Route path="/playing/ship">
                <ShipPagePage />
              </Route>
            </Switch>
          </div>
        </div >
      </Router >
    );
  }

}

export default App;
