import {motion} from 'motion/react'
export default function Eight(){
    return(
        <>
            {/* <motion.div
                initial={{x:100,y:100,opacity:0}}
                style={{width:"200px",height:"200px", backgroundColor:"green"}}
                animate={{opacity:1,x:400,y:0}}
                transition={{duration:0.8,type:"interia",delay:0.2,ease:"easeInOut",repeat:Infinity}}

            >

            </motion.div> */}

            <motion.div
                animate={{
                    rotate:360
                }}
                transition={{
                    repeat:Infinity,
                    duration:1,
                    ease:"linear"
                }}
                style={{
                    width:"40px",
                    height:"40px",
                    borderRadius:"50%",
                    border:"2px solid red",
                    borderTop:"transparent"
                }}
            >

            </motion.div>

            <hr />

            {/* Keyframes : It will give an array of the positions */}
            <motion.div
                style={{
                    width:"200px",
                    height:"200px",
                    // backgroundColor:"yellow"
                }}

                // animate={{
                //     x:[0,100,100,0,0],
                //     y:[0,0,100,100,0]
                // }}

                animate={{
                    x:[0,500,1000],
                    y:[0,200,0],
                    backgroundColor:["yellow","red","green"]
                }}

                transition={{
                    delay:2,
                    duration:4,
                    times:[0,2,4]
                }}
            >

            </motion.div>

            <hr />

            <motion.div
                style={{width:"200px",height:"200px",backgroundColor:"yellow"}}
                whileTap={{scale:1.5}}
                whileHover={{scale:2.0}}
            >

            </motion.div>

            <motion.p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel sint recusandae reprehenderit error dolor accusantium aperiam incidunt rerum harum at minus eius obcaecati sapiente dignissimos id nihil repellat, ab consequuntur iure. Impedit, consectetur? Hic officiis voluptatibus quis pariatur et sunt nesciunt eius. Doloremque cupiditate vel quibusdam similique saepe adipisci reprehenderit, eveniet alias dolore consequuntur obcaecati sunt quia animi maiores magnam consectetur necessitatibus natus facere, praesentium id ex sed? Assumenda exercitationem veritatis ea dolorem, magnam eaque vitae ad, velit soluta eligendi repellat, quibusdam quidem. Tempore voluptatibus laborum aperiam architecto impedit. Omnis culpa accusantium reprehenderit nihil voluptatem, enim qui unde consequuntur, modi in, labore sequi. Pariatur temporibus incidunt, itaque exercitationem asperiores nobis autem fuga nihil doloribus facilis sint provident odit fugiat placeat, eum qui rerum? Laboriosam voluptatibus qui in aperiam! Totam corporis quibusdam distinctio? Quisquam, dicta? Quia obcaecati officia hic dolor nobis aspernatur neque, sequi earum officiis omnis amet voluptate dicta corporis alias veniam corrupti ipsa numquam aliquam consequatur enim dolores quisquam cupiditate esse. Impedit, magnam? Laborum recusandae adipisci ipsa explicabo assumenda nihil ab, doloremque tempore expedita natus, iure dolorem veniam? Omnis perspiciatis ut veritatis, repellat pariatur fuga labore molestiae a beatae sint ipsa facilis maxime, assumenda cupiditate eveniet eum mollitia!
            </motion.p>
            <motion.p 
                whileInView={{scale:0.5}}
                whileDrag={{backgroundColor:"red"}}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel sint recusandae reprehenderit error dolor accusantium aperiam incidunt rerum harum at minus eius obcaecati sapiente dignissimos id nihil repellat, ab consequuntur iure. Impedit, consectetur? Hic officiis voluptatibus quis pariatur et sunt nesciunt eius. Doloremque cupiditate vel quibusdam similique saepe adipisci reprehenderit, eveniet alias dolore consequuntur obcaecati sunt quia animi maiores magnam consectetur necessitatibus natus facere, praesentium id ex sed? Assumenda exercitationem veritatis ea dolorem, magnam eaque vitae ad, velit soluta eligendi repellat, quibusdam quidem. Tempore voluptatibus laborum aperiam architecto impedit. Omnis culpa accusantium reprehenderit nihil voluptatem, enim qui unde consequuntur, modi in, labore sequi. Pariatur temporibus incidunt, itaque exercitationem asperiores nobis autem fuga nihil doloribus facilis sint provident odit fugiat placeat, eum qui rerum? Laboriosam voluptatibus qui in aperiam! Totam corporis quibusdam distinctio? Quisquam, dicta? Quia obcaecati officia hic dolor nobis aspernatur neque, sequi earum officiis omnis amet voluptate dicta corporis alias veniam corrupti ipsa numquam aliquam consequatur enim dolores quisquam cupiditate esse. Impedit, magnam? Laborum recusandae adipisci ipsa explicabo assumenda nihil ab, doloremque tempore expedita natus, iure dolorem veniam? Omnis perspiciatis ut veritatis, repellat pariatur fuga labore molestiae a beatae sint ipsa facilis maxime, assumenda cupiditate eveniet eum mollitia!
            </motion.p>

            <motion.div
                initial={{x:0}}
                style={{width:"100px",height:"100px",backgroundColor:"blue"}}
                whileInView={{x:400}}

            >


            </motion.div>
                    <hr />

            <motion.div
                drag
                style={{
                    width:"200px",
                    height:"200px",
                    backgroundColor:"purple"
                }}
                dragConstraints={{
                    left:0,
                    top:0,
                    right:800,
                    bottom:0
                }}
            >

            </motion.div>
            
        </>
    )
}