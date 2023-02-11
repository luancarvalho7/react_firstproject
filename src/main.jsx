import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { App } from './App'
import {ErrorPage } from './components/errorPage/error'
import './css/global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
