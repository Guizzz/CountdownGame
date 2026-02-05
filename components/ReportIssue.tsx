import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"

export default function ReportIssue(){
    const [isVisible, setVisible] = useState(false)
    function close()
    {
        setVisible(false)
    }
    return(
        <>
            <div className={isVisible?" fixed w-full h-full bg-black/50 z-10":""} onClick={()=>{ isVisible?close():"" }}/>
            <AnimatePresence initial={false} >
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="box"
                        className="z-20 m-10 min-md:m-auto p-2 left-0 right-0 top-1/6 fixed min-md:w-2/3 min-lg:w-1/2 rounded-md backdrop-blur-sm bg-white/30 shadow-xl"
                    >
                        Issue Reported! Thank you for helping us improve the game.
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}