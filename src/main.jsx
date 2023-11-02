import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Uppercase from './Uppercase.jsx'
import CountClick from './CountClick.jsx'
import MyName from './MyName.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Uppercase> hello world</Uppercase>
    <CountClick/>
    <MyName/>
  </React.StrictMode>,
)
