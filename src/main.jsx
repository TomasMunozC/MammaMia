import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import PizzaContext from './context/PizzaContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaContext>
        <App />
      </PizzaContext>
    </BrowserRouter>
  </React.StrictMode>
)
