import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/trocaticket.css'
import App from './pages/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
