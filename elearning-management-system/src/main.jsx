import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/mentor.css";
import PublicHomePage from './features/public-site/pages/PublicHomePage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PublicHomePage/>
  </StrictMode>,
)
