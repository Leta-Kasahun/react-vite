import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './API_Integration/MyApp.jsx'
import ScrimbaApp from './ScrimbaReactTutorial/ScrimbaApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyApp/>

    {/* <ScrimbaApp/> */}
  </StrictMode>
)
