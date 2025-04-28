import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import App from './App.jsx'
const re=React.createElement(
  "a",
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click me to visit google"
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {re}
  </StrictMode>,
)
