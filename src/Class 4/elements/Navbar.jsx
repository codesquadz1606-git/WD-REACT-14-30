import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h1>Logo</h1>
                <div>
                    <ul style={{display:"flex",gap:"20px"}}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}