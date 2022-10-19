import React from 'react'
import ReactDOM from 'react-dom/client'

/* Router */
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

/* Style */
import '@fontsource/nunito-sans'
import './index.css'

/* ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowsRotate,
  faBars,
  faCircleChevronRight,
  faCopy,
  faPlus,
  faPlusCircle,
  faStar,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faPlus, faArrowsRotate, faCopy, faCircleChevronRight, faTrophy, faStar, faPlusCircle)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
