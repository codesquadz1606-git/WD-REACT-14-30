import { useState } from "react";

export default function Seventh(){
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        age:""
    });

    function handleChange(e){
        let {name,value}=e.target // destructure kar liaa
        setFormData((prev)=>({
            ...prev , [name]:value
        })
        )
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Full Name:</label>
                <input type="text" name="name" onChange={handleChange} value={formData.name}/>
                <br />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" onChange={handleChange} value={formData.email}/>
                <br />
                <label htmlFor="">Age:</label>
                <input type="number" name="age" onChange={handleChange} value={formData.age}/>
                <br />
                <input type="submit" />
            </form>
        </>
    )
}