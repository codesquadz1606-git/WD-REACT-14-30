import New from "./Components/New";

export default function Second(){
    function handleClick(event){
        console.log(event)
    }

    let name="Shubham";

    let details={
        name:"Shivangi",
        city:"Gurgaon",
        age:23
    }

    let all=[
        {
            name:"Shimla Airbnb",
            price:4000,
            rating:4.5
        },
        {
            name:"Dharmshala Airbnb",
            price:2500,
            rating:4.6
        },
        {
            name:"Manali Airbnb",
            price:3000,
            rating:4.0
        },
        {
            name:"Rishkesh Airbnb",
            price:4500,
            rating:4.8
        }
    ]
    return(
        <>
            {/* <button onClick={handleClick}>Click Here</button>
            <h1>Hello</h1> */}


            {/* My name is {name} */}
            {/* Props */}
            {/* <New name={name}/> */}

            {/* <New detail={details}/> */}
            {/* <New name={details.name} age={details.age} city={details.city}/> */}

            {
                all.map((el)=>(
                    <New name={el.name} price={el.price} rating={el.rating}/>
                ))
            }
        </>
        
    )
}