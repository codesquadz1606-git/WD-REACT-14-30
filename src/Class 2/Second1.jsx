import { useState } from "react"

export default function Second1(){
    // let count=0

    let [count,setCount]=useState(10)
    // useState : It provide us two thing current & future

    console.log(count)
    // console.log(setCount)

    function incCount(){
        setCount(count+10)
    }
    function decCount(){
        setCount(count-10)
    }

    let [current,setCurrent]=useState(false);
    function updateCurrent(){
        setCurrent(!current)
    }
    return(
        <>
            <button onClick={incCount}>+</button>
            {count}
            <button onClick={decCount} disabled={count==0}>-</button>

            <hr />

            { current && <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non excepturi deserunt reprehenderit rerum perferendis dignissimos blanditiis, ratione tempore tenetur ipsam magnam quas dolore, natus, aliquam impedit adipisci! Nam, cum iure maxime assumenda dignissimos qui vel tenetur eveniet voluptatum sint accusamus perferendis quae repellat aliquam quasi sapiente praesentium, odit libero? Doloribus dolore, maxime accusantium architecto repellat nostrum nisi! Delectus adipisci sapiente provident doloribus repellendus officiis eos, maxime hic incidunt ipsum expedita distinctio consequatur aut. Ad exercitationem doloribus expedita culpa autem similique voluptates 
            </p>}

            <button onClick={updateCurrent}>
                {
                    (current)?
                    "Hide Content" :
                    "Show Content"
                }
            </button>
        </>
    )
}