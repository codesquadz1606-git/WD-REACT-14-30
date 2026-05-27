import { useEffect, useState } from "react"

export default function Third1() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(20)

    // Case 1: Without Dependency : it will runn on every re-renders on the page.
    // useEffect(()=>{
    //     console.log("Use Effect Triggered")
    // })

    // Case 2: With empty array : It will run only once when page is rendered , it will not run on every re-renderes.
    // useEffect(() => {
    //     console.log("Use Effect Triggered")
    // }, [])

    // Case 3: With dependency : It will run only when their is any change in the dependency.
    useEffect(()=>{
        console.log("Use Effect Triggered")
    },[count1])

    return (
        <>
            <h1>Count : {count} <button onClick={() => { setCount(count + 10) }}>+10</button></h1>
            <h1>Count 1 : {count1} <button onClick={() => { setCount1(count1 + 20) }}>+20</button></h1>
        </>
    )
}