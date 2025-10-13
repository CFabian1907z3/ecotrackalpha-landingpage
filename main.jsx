import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// IMPORTANTE: Hemos eliminado las importaciones de './index.css' y './App.css' 
// ya que ahora confiamos únicamente en la CDN de Tailwind CSS cargada en index.html.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

