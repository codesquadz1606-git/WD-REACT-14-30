import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fifth from './Fifth'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Navbar from './Navbar'

const New1 = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:
            <>
            <Navbar/>
            <Fifth/>
            </>
        },
        {
            path:"/product/:id",
            element:<ProductDetail/>
        },
        {
            path:"/cart",
            element:<>
                <Navbar/>
                <Cart/>
            </>
        }
    ]);
  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  )
}

export default New1;
