import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ backgroundColor: '#0D1117', minHeight: '100vh' }}>
      <App />
    </div>
  </React.StrictMode>,
)
