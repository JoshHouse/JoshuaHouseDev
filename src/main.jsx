import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './components/JSX/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-100 vh-100"><App /></div>
  </StrictMode>,
)
