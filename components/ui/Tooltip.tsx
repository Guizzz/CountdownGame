import { motion } from "motion/react";
import React, { useState } from "react";

const Tooltip = ({ text, children } : {text: any, children: React.ReactNode}) => {
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
          className="absolute top-full left-1/2 transform -translate-x-1/2 bg-letters text-white px-2.5 py-1.5 rounded text-sm whitespace-nowrap z-50 m-2"
        >
          <span className=" font-bold"> {text[0]} </span> : {text[1]}
        </motion.div>
      )}
    </span>
  );
};

export default Tooltip;
