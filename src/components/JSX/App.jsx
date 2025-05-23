import React, { useState } from 'react';
import '../CSS/App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import History from './History';
import ContactMe from './ContactMe';

function App() {
  const [activePage, setActivePage] = useState('home');
  
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setPage={setActivePage}/>;
      case 'aboutMe':
        return <AboutMe setPage={setActivePage}/>;
      case 'myProjects':
        return <MyProjects setPage={setActivePage}/>;
      case 'history':
        return <History setPage={setActivePage}/>;
      case 'contactMe':
        return <ContactMe setPage={setActivePage}/>;
      default:
        return <HomePage setPage={setActivePage}/>;
    }
  };

  return (

    <div 
      id="pageContainer" 
      className="w-100 vh-100">
      
      {renderPage()}
    </div>
  );
}

export default App;
