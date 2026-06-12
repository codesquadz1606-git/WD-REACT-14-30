import { useRef, useState } from "react"

export default function Tenth1(){
    // const [count,setCount]=useState(0)

    // Use case 1:
    const inputRef=useRef()
    function focusInput(){
        // console.dir(inputRef.current)
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="red"
    }

    // use case 2:
    const countRef=useRef(0);
    // console.log(countRef)

    function updateCountRef(){
        countRef.current++;
        console.log(countRef.current)
    }
    return(
        <>
            {/* <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button> */}

            <h1>Count : {countRef.current}</h1>
            {/* <button onClick={()=>{
                setCount(count+1)
            }}>+1</button> */}

            <button onClick={updateCountRef}>+1</button>
        </>
    )
}