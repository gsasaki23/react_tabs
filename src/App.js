import React from 'react';
import './App.css';

import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs tabNames={['Tab 1','Tab 2','Tab 3']} tabContents={['Tab 1 Content','Tab 2 Content','Tab 3 Content']} />
    </div>
  );
}

export default App;
