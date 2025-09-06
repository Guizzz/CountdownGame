import { motion } from "motion/react";
import { useState } from "react";

export default function Letter({ letter }: {letter : String}) {
  const [l, setL] = useState(letter)
  return (
    <>
      <motion.div 
        transition={{ 
          ease: "easeInOut",
          duration: 0.9,
          type: "spring",
          bounce: 0.5
        }}
        animate={{ 
          rotateY: letter!="" ? 0 : 180,
        }}
        className="h-8 w-5 min-[480px]:h-12 min-[480px]:w-8 min-md:h-15 min-md:w-10 bg-dark-gray mx-1 min-md:mx-2
                      bg-letters
                      rounded-sm 
                      flex flex-col justify-center items-center shadow-letteres">

        <motion.div
            transition={{ 
              ease: "easeInOut",
              duration: 0.9,
              type: "spring",
              bounce: 0.5
            }}
            animate={{ rotateY: letter!="" ? 0 : 180 }}
            className=" backface-hidden text-sm min-[480px]:text-lg min-md:text-2xl"
          >
          {letter}
          </motion.div>                   
      </motion.div>
    </>
  );
}
