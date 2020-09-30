import React from 'react';
import './App.css';
import Movies from './Movies';
import Search from'./components/Search.js'

function App() {
  return (
    <React.Fragment>
      <Search />
      < Movies />
    </React.Fragment>
  );
}

export default App;