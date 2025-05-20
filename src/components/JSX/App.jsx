import React, { useState } from 'react'
import '../CSS/App.css'
import HomePage from './HomePage'

function App() {
  const [activePage, setActivePage] = useState('home');
  
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setPage={setActivePage}/>;
      default:
        return <HomePage setPage={setActivePage}/>;
    }
  }

  return (
    <div id="pageContainer" className="w-100 vh-100">{renderPage()}</div>
  )
}

export default App
