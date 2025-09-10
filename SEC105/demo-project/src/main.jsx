import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './components/Hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App />
  </StrictMode>,
)
