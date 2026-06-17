import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, reset } from "./slicer/CounterSlice"
import { useState } from "react"

export default function Eleven(){
    const count=useSelector((state)=>state.counter.value)
    console.log(count)

    const [amount,setAmount]=useState(0)

    function handleAmount(){
        dispatch(incrementByAmount(amount))
    }

    const dispatch=useDispatch()
    return(
        <>
            <h1>Redux Toolkit</h1>
            <h1>Count:{count}</h1>

            <button onClick={()=>{dispatch(increment())}}>+</button> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(decrement())}}>-</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(reset())}}>0</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <br />

            <input style={{border:"2px solid black"}}
            onChange={(e)=>{setAmount(Number(e.target.value))}}
            type="text" name="" id="" />
            <button onClick={handleAmount}>Submit</button>
        </>
    )
}