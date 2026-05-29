import { useLocation } from "react-router-dom"

export default function NotFound(){
    let {pathname}=useLocation()
    console.log(pathname)
    return(
        <>
            <h1>Page .{pathname} Not Exist</h1>
        </>
    )
}