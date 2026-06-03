import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fifth from './Fifth'
import ProductDetail from './ProductDetail'

const New1 = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<Fifth/>
        },
        {
            path:"/product/:id",
            element:<ProductDetail/>
        }
    ]);
  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  )
}

export default New1;
