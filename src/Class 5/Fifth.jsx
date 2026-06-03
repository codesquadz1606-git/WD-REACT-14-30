import { useEffect, useState } from "react";
import Product from "./Product";

export default function Fifth(){
    const[total,setTotal]=useState(0);
    const [current,setCurrent]=useState(0);
    const PAGE_SIZE=10;
    const[products,setProducts]=useState([])
    let url=`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${current*PAGE_SIZE}`;

    function dataFetch(){
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            setTotal(data.total)
            setProducts(data.products)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        dataFetch();
    },[current])

    console.log(products)

    const no_of_pages=Math.ceil(total/PAGE_SIZE);
    console.log(no_of_pages)

    return(
        <>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"40px"}}>
                {
                    products.map((el)=>(
                        <Product data={el}/>
                    ))
                }
            </div>
            
            <div>

            {
                Array(no_of_pages).keys().map((el)=>(
                    <button onClick={()=>{setCurrent(el)}}>{el+1}</button>
                ))
            }
            </div>
        </>
    )
}