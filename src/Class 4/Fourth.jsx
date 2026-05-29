import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./elements/Home"
import About from "./elements/About"
import Services from "./elements/Services"
import Contact from "./elements/Contact"
import NotFound from "./elements/NoPageFound"
import Navbar from "./elements/Navbar"
import Student from "./elements/Student"
import Java from "./elements/Child/Java"
import Mern from "./elements/Child/Mern"
import DS from "./elements/Child/Ds"

export default function Fourth(){
    let routes=createBrowserRouter([
        {
            path:"/", //default path
            element:<>
            <Navbar/>
            <Home/>
            </>
        },
        {
            path:"/about",
            element:<>
            <Navbar/>
            <About/>
            </>
        },
        {
            path:"/services",
            element:<>
            <Navbar/>
            <Services/>
            </>,
            children:[
                {
                    path:"java",
                    element:<Java/>
                },
                {
                    path:"mern",
                    element:<Mern/>
                },
                {
                    path:"ds",
                    element:<DS/>
                }
            ]
        },
        {
            path:"/contact",
            element:<>
            <Navbar/>
            <Contact/>
            </>
        },
        {
            path:"/student/id/:id/city/:city/branch/:branch",
            element:<>
                <Navbar/>
                <Student/>
            </>
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ])
    return(
        <>
            <RouterProvider router={routes}/>
        </>
    )
}