import { motion } from "motion/react";
import Letter from "./Letter";

export default function Settings({timer, setTimer, letters, setLetter} : {timer:number, setTimer: Function, letters:number, setLetter: Function}){

    function Parameter({value, current, f} : { value:number, current:number, f:Function}){
        return (
            <>
            <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => f(value)}
                    transition= {{
                        duration: 0.05,
                    }}
                    className={(current==value? "font-bold": "text-secondary") + " mx-3 cursor-pointer"}> 
                {value} 
            </motion.button>
            </>
        );
    }

    return (
        <div className="w-full m-2 min-sm:mx-0 min-sm:w-4/5 min-md:w-2/3 h-20 my-5 flex items-center justify-center ">
            <div className=" w text-right m-7">
                Settings
            </div>
            <div className=" w-[1px] h-full bg-white dark:bg-light-white"/>
            <div className=" flex flex-col m-4 ml-4 w-full min-md:w-1/2 min-lg:w-1/3 ">
                <div className=" flex flex-row justify-between">
                    <div className=" font-bold">
                        Time
                    </div>
                    <div>
                        <Parameter value={120} current={timer} f={setTimer}/>
                        <Parameter value={90} current={timer} f={setTimer}/>
                        <Parameter value={3} current={timer} f={setTimer}/>
                    </div>
                </div>
                <div className=" flex flex-row justify-between">
                    <div className=" font-bold">
                        Letters
                    </div>
                    <div>
                        <Parameter value={12} current={letters} f={setLetter}/>
                        <Parameter value={10} current={letters} f={setLetter}/>
                        <Parameter value={9} current={letters} f={setLetter}/>
                    </div>
                </div>
            </div>
        </div>
    );
}