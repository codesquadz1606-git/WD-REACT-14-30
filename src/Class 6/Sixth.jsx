import { useForm } from "react-hook-form"

export default function Sixth() {
    const {
        register, // extracting bvalue in key:value pairs
        handleSubmit, // it handles the data & have in buil preventDefault function.
        reset, // reset all fields.
        formState: { errors }
    } = useForm()

    function dataHandle(data) {
        console.log(data)
        reset()
    }

    let errorMessage={
        name:{
            max: "Only 11 Chars Allowed",
            min: "Minimum 5 Chars Needed"
        }
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit(dataHandle)}>
                <label htmlFor="">Full Name:</label>
                <input type="text" placeholder="Enter Your Full Name" {...register("fullname", { required:true, minLength: { value: 5, message: errorMessage.name.min }, maxLength:{ value:11 , message:errorMessage.name.max} })} />

                {
                    errors.fullname && <span>{errors.fullname.message}</span> 
                }
                <br />
                <label htmlFor="">Email :</label>
                <input type="email" placeholder="Enter Your Email" {...register("email")} />
                <br />
                <label htmlFor="">Age:</label>
                <input type="number" placeholder="Enter Your Age" {...register("age")} />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}