import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Menu from './Menus/Menu';
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

    const main_menu_buttons = [
      { path: "/create/start", name: "New Caracter" },
      { path: "/playing/character", name: "Play" },
      { path: "/manage/start", name: "GM" },
    ]

    const playing_menu_buttons = [
      { path: "/playing/character", name: "Character" },
      { path: "/playing/skills", name: "Skills" },
      { path: "/playing/combat", name: "Combat" },
      { path: "/playing/inventory", name: "Inventory" },
      { path: "/playing/talent_trees", name: "Talent Trees" },
      { path: "/playing/ship", name: "Ship" }
    ]

    return (
      <Router>
        <div className="background">
          <div className="page-root-menu">
            <Switch>
            <Route path="/playing/">
                <Menu buttons={playing_menu_buttons} />
              </Route>
              <Route path="/">
                <Menu buttons={main_menu_buttons} />
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
