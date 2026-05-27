import { FaMoon, FaSun } from "react-icons/fa";
import "./third.css"
import { useState } from "react";
export default function Third(){
    const [theme,setTheme]=useState(true)
    return(
        <>
            <div className={theme?"light":"dark"}>
                <div className="navbar">
                    <h1 style={theme?{color:"black"}:{color:"white"}}>Logo</h1>
                    <div className="icons">
                        {
                            theme?
                        <FaMoon onClick={()=>{setTheme(!theme)}} size={40}/>:
                        <FaSun onClick={()=>{setTheme(!theme)}}  size={40}/>
                        }
                    </div>
                </div>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid dolore at deserunt dolor itaque quibusdam, dolorem, perspiciatis minus necessitatibus nam aut harum culpa dignissimos! Delectus unde debitis voluptate saepe iusto animi, rerum quae eius, numquam, deserunt veniam amet earum nemo aliquid exercitationem sit illo ducimus doloremque! Earum fugiat sequi hic quod natus quae a in ut iste aspernatur. Cumque autem incidunt aperiam ut sit quo harum, dicta id animi. Eligendi doloremque dolores facilis eaque, ut suscipit eos nulla. Ab sint repellat aspernatur facilis modi ipsa molestiae, numquam exercitationem neque, fugiat error incidunt maxime explicabo voluptates doloremque assumenda magnam eveniet culpa officiis ratione iste libero? Modi facere iusto architecto voluptatem dolorum. Autem quasi magni, sint perferendis unde ea optio atque laboriosam accusantium repellat nam, non fugiat sed a pariatur omnis ex iusto voluptas. Quibusdam voluptatum in assumenda pariatur soluta maxime sunt, nulla eligendi explicabo, necessitatibus reprehenderit dignissimos sint! In nemo cum recusandae laboriosam ipsum distinctio eos! Repellat quae numquam eaque saepe magni architecto dicta nulla accusamus est odit, cumque, quisquam in eum aspernatur provident tempora rem consequuntur animi sunt ea aliquid facilis. Iste, veritatis dolorum? Totam accusantium ea explicabo iusto, dolore illum vero veniam numquam, consectetur obcaecati nam corrupti voluptates officia consequatur! Reiciendis vero dolore asperiores eaque in ex sint laboriosam voluptatem libero repudiandae. Illum amet sapiente non? Nam eius vel ad laboriosam, temporibus corporis repellat! Laborum rerum repellendus labore, nisi exercitationem, ut dignissimos ipsa suscipit quisquam beatae saepe eaque modi placeat distinctio, voluptatem accusantium aperiam maiores amet. Officiis optio incidunt, adipisci culpa, totam nam deleniti voluptatem non quaerat, maiores neque fugit. Soluta nisi qui repudiandae ipsum consequatur nobis sunt itaque deserunt cum ea, possimus commodi eligendi. Distinctio asperiores modi repudiandae minus vero perspiciatis quibusdam exercitationem atque magnam et, quas odit dolorem voluptatem quam illo? Sint harum ut veniam quasi?
                </p>

            </div>
        </>
    )
}