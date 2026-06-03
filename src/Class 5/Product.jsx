import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({data}) => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>{navigate(`/product/${data.id}`)}} style={{border:"2px solid white",width:"350px",padding:"15px 20px",borderRadius:"30px"}}>
    <h1 style={{lineHeight:"40px",fontSize:"1.5rem"}}>{data.title}</h1>
        <img src={data.thumbnail} alt="" />
        <p>{data.description}</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>{data.price}</p>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default Product
