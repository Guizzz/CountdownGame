import { motion } from "motion/react";

export default function Button({active, f, children}: {active:Boolean, f: Function, children: React.ReactNode}){
    if (!active)
        return
    return(
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.75 }}
            onClick={() => f()} 
            className=" cursor-pointer p-2 m-2 rounded-sm bg-button hover:bg-black/10 shadow-md"> 
            {children} 
        </motion.button>
    );
}