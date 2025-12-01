import { motion } from "motion/react";
import Tooltip from "./ui/Tooltip";

// https://dictionary.cambridge.org/dictionary/english/
function ResultRow({words_list}: {words_list: Array<any>})
{   
    function openInNewTab(word:any) {
        var w = Object.keys(word)[0];
        console.log("Clicked word:", w);
        console.log("meaning:", word[Object.keys(word)[0]]["MEANINGS"]["1"][1]);
        const newWindow = window.open( "https://dictionary.cambridge.org/dictionary/english/" + w , '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return(
        <motion.div
            whileInView={{
                transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.8,
                },
                opacity: 1, scale: 1,
                x: 0
            }}
            viewport={{ once: true, amount: 0.8 }}
            initial={{ opacity: 0, scale: 0.8, x:50 }}
        >
            <div className=" text-lg min-md:text-2xl">{
                words_list.map((word, index) =>
                    <span className=" px-2 hover:underline cursor-pointer inline-block" key={index} onClick={() => openInNewTab(word)}> 
                        <Tooltip text={word[Object.keys(word)[0]]["MEANINGS"]["1"]}>
                            {Object.keys(word)[0]}
                        </Tooltip>
                    </span>
                )
            }
            </div>
        </motion.div>
    )
}

export default function Result({ words, display }: {words:Array<{len:number, words:Array<any>}>, display: boolean}) {

    if (words == null || words.length == 0 || !display)
        return;

    return (
        <div className=" w-full min-md:w-3/4 min-lg:w-1/2 ">
            {
                words.map((value, index) => ( 
                    <div key={index} className=" bg-light-gray dark:bg-dark-gray m-4 p-5 "> 
                        <span className=" font-bold text-2xl"> {value.len} </span> <span className=" italic"> letters </span> 
                        <ResultRow words_list={value.words}/>
                    </div> 
                ))
            }
        </div>
    );
}