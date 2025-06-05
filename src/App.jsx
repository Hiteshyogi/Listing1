import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Listing from './components/Listing'
import DetailsPage from './components/DetailsPage'

 function App() {
  const routers = createBrowserRouter([
    {
      path: "/:category_slug?",
      element: <Listing/>
    },
    {
      path: "/detail/:product_id",
      element: <DetailsPage/>
    }
  ])
  return (
    <RouterProvider router={routers}/>
  )
}


export default App;
