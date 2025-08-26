
import { motion } from "motion/react";
import Letter from "./Letter";


export default function Board({ letters } : { letters : Array<String> }) {
  
  return (
    <motion.div
      initial={{ scale:0.7, opacity: 0 }}
      animate={{ scale:1, opacity:1 }}
      key={letters.length}
      transition= {{
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.5,
                }}
    >
      <div className=" flex flex-row justify-center items-center m-5">

        {
          letters.map((l, index) =>
                <Letter key={index} letter={l} />
            )
        }
        
      </div>
    </motion.div>
  );
}