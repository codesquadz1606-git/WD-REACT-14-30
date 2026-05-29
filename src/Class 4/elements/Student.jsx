import { useParams } from "react-router-dom"

export default function Student(){
    let {id,city,branch}=useParams()
    
    return(
        <>
            <h1>Student Detail </h1>
            <h2>Student Id : {id}</h2>
            <h2>Student City : {city}</h2>
            <h2>Student Branch : {branch}</h2>
        </>
    )
}