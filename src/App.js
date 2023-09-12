import React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Desktop from './components/desktop';
import Mobiles from './components/mobile';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        {window.innerWidth < 769 ? (
         <Mobiles/>
        ) : (
          <Desktop />
        )}
      </main>
    </div>
  );
}

export default App;
