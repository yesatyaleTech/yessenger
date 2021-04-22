import React from 'react';
import './App.css';
import ComposePage from './views/ComposePage/ComposePage';
import { LandingPage } from './pages/LandingPage.component';

function App() {
  return (
    <div className="App">
      <LandingPage/>
        {/* <ComposePage/> */}
    </div>
  );
}

export default App;
