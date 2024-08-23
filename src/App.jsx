import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import SearchDog from  "./pages/dog/SearchDog"
import Breed from "./pages/breeds/Breed"
import Header from "./pages/header/Header"

import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchDog/>
  },

  {
    path: "/breed",
    element: <Breed/>
  }
])

function App() {


  return (

    <>
    <Header/>
    <RouterProvider router={router} />
   
    </>
  )
}

export default App
