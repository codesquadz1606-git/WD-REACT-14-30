import { motion } from "motion/react"
export default function Seventh1(){
    return(
        <>
            <motion.h1
            animate={{rotate:360}}
            transition={{duration:2}}
            >
                Hello
            </motion.h1>
        </>
    )
}