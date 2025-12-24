import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './components/App.jsx'
import { ContactsCrudProvider } from './context/ContactsCrudContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactsCrudProvider>

    <App />
    </ContactsCrudProvider>
  </StrictMode>,
)
