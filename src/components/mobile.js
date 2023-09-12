

import React, { useState } from 'react';
import './mobile.css'; 
import Card1 from './Card/card1';
import Card2 from './Card/card2';
import Card3 from './Card/card3';

function Mobiles() {
  
  const [activeTab, setActiveTab] = useState(null);

  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main-container">
      <div className="button-container">
        
        <button
          className={`custom-button ${activeTab === 'tab1' ? 'black-bg' : 'transparent-bg'}`}
          style={{ color: activeTab === 'tab1' ? 'white' : 'black' }}
          onClick={() => handleTabClick('tab1')}
        >
          Pay Monthly
        </button>
        <button
          className={`custom-button ${activeTab === 'tab2' ? 'black-bg' : 'transparent-bg'}`}
          style={{ color: activeTab === 'tab2' ? 'white' : 'black' }}
          onClick={() => handleTabClick('tab2')}
        >
          Pay Yearly(25%)
        </button>
        <button
          className={`custom-button ${activeTab === 'tab3' ? 'black-bg' : 'transparent-bg'}`}
          style={{ color: activeTab === 'tab3' ? 'white' : 'black' }}
          onClick={() => handleTabClick('tab3')}
        >
          Another Tab
        </button>
      </div>
      
      <div className="mobile-container">
        
        {activeTab === 'tab1' && <Card1 />}
        {activeTab === 'tab2' && <Card2  />}
        {activeTab === 'tab3' && <Card3 />}
      </div>
    </div>
  );
}

export default Mobiles;
