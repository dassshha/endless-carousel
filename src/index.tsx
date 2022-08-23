import React from 'react'
import ReactDOM from 'react-dom/client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import App from './components/app/app'
import { goods } from './mocks/goods'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App goods={goods} />
  </React.StrictMode>,
)
