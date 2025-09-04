import { motion } from "motion/react";

export default function SecondaryButton({active, f, children}: {active:Boolean, f: Function, children: React.ReactNode}){
    if (!active)
        return
    return(
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => f()} 
            className=" cursor-pointer p-2 m-2 rounded-sm 
                    hover:bg-black/20  border-2 italic shadow-md"> 
                {children} 
        </motion.button>
    );
}