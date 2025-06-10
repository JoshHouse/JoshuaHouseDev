import React, { useState } from 'react';
import '../CSS/App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import History from './History';
import ContactMe from './ContactMe';
import Dummy2048 from './ProjectPages/Dummy2048';
import FoodStop from './ProjectPages/FoodStop';
import RasterBased from './ProjectPages/RasterBasedRenderer';
import RayTracer from './ProjectPages/RayTracer';
import TextBased from './ProjectPages/TextBasedRPG';
import WGJDashboard from './ProjectPages/WGJDashboard';
import VelocityTrials from './ProjectPages/VelocityTrials';

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
      case 'dummy2048':
        return <Dummy2048 setPage={setActivePage}/>;
      case 'textBased':
        return <TextBased setPage={setActivePage}/>;
      case 'foodStop':
        return <FoodStop setPage={setActivePage}/>;
      case 'rasterBased':
        return <RasterBased setPage={setActivePage}/>;
      case 'rayTracer':
        return <RayTracer setPage={setActivePage}/>;
      case 'WGJDashboard':
        return <WGJDashboard setPage={setActivePage}/>;
      case 'velocityTrials':
        return <VelocityTrials setPage={setActivePage}/>;
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
