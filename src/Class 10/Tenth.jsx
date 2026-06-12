import { useReducer } from "react"

const initialState={
    count1:10,
    count2:20,
    count3:30
}

function reducer(state,action){
    switch(action.type){
        case "INC 10":{
            return {
                ...state , [action.payload] : state[action.payload]+10
            }
        }
        case "INC 20":{
            return {
                ...state , [action.payload] : state[action.payload]+20
            }
        }
        case "INC 30" :{
            return{
                ...state , [action.payload] : state[action.payload]+30
            }
        }
    }
}
export default function Tenth(){
    const[state,dispatch]=useReducer(reducer,initialState)

    console.log(state)
    return(
        <>
            <h1>Use Reducer Hook</h1>

            <h2>Count 1 : {state.count1}  <button onClick={()=>{
                dispatch({
                    type:"INC 10",
                    payload:"count1"
                })
            }} style={{backgroundColor:"grey", padding:"10px 20px"}}>+10</button></h2>
            <h2>Count 2 : {state.count2}  <button onClick={()=>{
                dispatch({
                    type:"INC 20",
                    payload:"count2"
                })
            }} style={{backgroundColor:"grey", padding:"10px 20px"}}>+20</button></h2>
            <h2>Count 3 : {state.count3}  <button onClick={()=>{
                dispatch({
                    type:"INC 30",
                    payload:"count3"
                })
            }} style={{backgroundColor:"grey", padding:"10px 20px"}}>+30</button></h2>
        </>
    )
}