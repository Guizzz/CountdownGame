import { motion } from "motion/react";
import React, { useState } from "react";
import { reportWord } from "../../server/server";

function Tooltip ({ text, children , word} : {text: any, children: React.ReactNode, word:String})
{
  async function report(word:String)
  {
    console.log("word " + word + " reported");
    await reportWord(word);
    alert("thanks for report");
  }

  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  if (!text || text.length === 0) {
    return <>{children}</>;
  }

  return (
    <span
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      style={{ position: "relative", cursor: "pointer" }}
    >
      {children}
      {isVisible && (
        
        <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="box"
          className="absolute top-full left-1/2 transform -translate-x-1/2 z-50"
          onMouseLeave={hideTooltip}
        >
          <div className="bg-letters text-white px-2.5 py-1.5 rounded text-sm whitespace-nowrap m-2">
            <span className=" font-bold"> {text[0]} </span> : {text[1]}
            <div className="  text-red-400 cursor-pointer text-xs underline mt-1" onClick={()=>report(word)}>
              Report word issue
            </div>

          </div>
        </motion.div>
      )}
    </span>
  );
};

export default Tooltip;
