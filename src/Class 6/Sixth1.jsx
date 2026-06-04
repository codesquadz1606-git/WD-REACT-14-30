import { nanoid } from "nanoid"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

export default function Sixth1(){
    const [todo,setTodo]=useState([]);
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm()

    function handleTodo(data){
        data.id=nanoid();
        data.isCompleted=false;

        // console.log(data)

        setTodo([...todo , data])
        toast.success("Todo Created")
        reset()
    }

    console.log(todo)

    function toogleTask(id){
        setTodo((prev)=>
            prev.map((t)=>
                t.id===id ? {...t,isCompleted:!t.isCompleted} : t
            )
        )
    }

    function deleteTodo(id){
        let filteredTodo=todo.filter((t)=> t.id !== id);
        // console.log(filteredTodo)
        setTodo(filteredTodo)
        toast.error("Todo Deleted")
    }

    return(
        <>
            <h1>TODO LIST</h1>
            <form action="" onSubmit={handleSubmit(handleTodo)}>
                <input type="text" placeholder="Enter your Todo" {...register("todo")}/>
                <input type="submit" value="Create Todo"/>
            </form>


            <div>
            {
                todo.length>0?
                todo.map((el)=>(
                    <div key={el.id} style={{display:"flex",justifyContent:"center", alignItems:"center",gap:"30px"}}>
                        <h1 onClick={()=>{toogleTask(el.id)}}
                        style={el.isCompleted?{textDecoration:"line-through",color:"red"}:{}}>
                            {el.todo}
                        </h1>
                        <button onClick={()=>{deleteTodo(el.id)}}>Delete Todo</button>
                    </div>
                )) :
                <h1>No TODO Yet</h1>
            }
            </div>
        </>
    )
}