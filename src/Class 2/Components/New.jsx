import Name from "./Name"
import Price from "./Price"
import Rating from "./Rating"

export default function New({name,price,rating}){
    // console.log(props) // object
    // console.log(detail)
    // console.log(name,age,city)
    return(
        <>
            {/* <h1>My name is {props.name}</h1> */}
            {/* <h1>My name is {name}</h1> */}

            <Name name={name}/>
            <Price price={price}/>
            <Rating rating={rating}/>
        </>
    )
}