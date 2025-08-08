/* components/CountDown.jsx */

import React, { useState, useEffect } from "react";

export default function CountdownTimer ( {start, timer, callback} : {start: Boolean, timer: number, callback: Function} ) {
    const [timeRemaining, setTimeRemaining] = useState(timer);

    function secToTime(secs:number) {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor((secs - (hours * 3600)) / 60);
        let seconds = secs - (hours * 3600) - (minutes * 60);
        return minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
    }

    useEffect(() => {
        if(!start)
        {
            setTimeRemaining(timer);
            return;
        }
        const countdownInterval = setInterval(() => {
            if (timeRemaining == 0)
            {
                callback(true);
                return () => clearInterval(countdownInterval);
            }
            setTimeRemaining(timeRemaining - 1);
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [start, timeRemaining, timer]);

    if( timeRemaining == 0)
        return (
            <div className=" text-3xl text-red-400 m-4"> TIME IS UP! </div>
        );

    return (
      <div className=" text-3xl m-4">
        { secToTime(timeRemaining)}
      </div>
    );
};

