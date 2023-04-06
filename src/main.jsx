import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Layout/main'
import Home from './components/Home/Home'
import OderReview from './components/OderReview/OderReview'
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('tshirts.json')
      },
      {
        path:'review',
        element:<OderReview></OderReview>
      },
      {
        path:'about',
        element:<About></About> 
      },
      {
        path:'contact',
        element:<Contacts></Contacts>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
