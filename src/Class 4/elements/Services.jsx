import { Outlet, useNavigate } from "react-router-dom";

export default function Services(){
    let navigate=useNavigate()
    return(
        <>
            <h1>
                Services Page
            </h1>
            
            <button onClick={()=>{navigate("java")}}>Java</button>
            <button onClick={()=>{navigate("mern")}}>Mern</button>
            <button onClick={()=>{navigate("ds")}}>DS</button>

            <Outlet/>
        </>
    )
}