import React from 'react';
import './App.css';
import Menu from './Utils/Menu';
import SkillPage from './Skills/SkillPage';

function App() {
  return (
    <div className="background">
      <div className="page-root-menu">
        <Menu />        
      </div>
      <div className="page-background">
        <SkillPage />
      </div>
    </div>
  );
}

export default App;
