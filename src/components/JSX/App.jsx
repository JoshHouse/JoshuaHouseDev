import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../CSS/App.css';

import ScrollToTop from './ScrollToTop'
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
  return (
    <div id="pageContainer" className="w-100 vh-100">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<ContactMe />} />

        <Route path="/dummy2048" element={<Dummy2048 />} />
        <Route path="/textBased" element={<TextBased />} />
        <Route path="/foodStop" element={<FoodStop />} />
        <Route path="/rasterBased" element={<RasterBased />} />
        <Route path="/rayTracer" element={<RayTracer />} />
        <Route path="/WGJDashboard" element={<WGJDashboard />} />
        <Route path="/velocityTrials" element={<VelocityTrials />} />

        {/* fallback route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;