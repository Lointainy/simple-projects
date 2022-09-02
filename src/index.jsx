import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

/* STYLE */
import './index.css'

/* FONT */
import '@fontsource/montserrat'

/* ICONS */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
