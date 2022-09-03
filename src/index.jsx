import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './App'

/* STYLE */
import './index.css'

/* FONT */
import '@fontsource/nunito-sans'

/* ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faPlus)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
