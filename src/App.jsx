import React from 'react';
import Menu from './components/Menu/Menu';
import { menuData } from './data/menuData';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Menu dishes={menuData} />
    </div>
  );
};

export default App;