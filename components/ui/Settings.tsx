export default function Settings({timer, setTimer, letters, setLetter} : {timer:number, setTimer: Function, letters:number, setLetter: Function}){
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
                        <button className={(timer==120? "font-bold": "text-secondary") + " mx-3"} onClick={() => setTimer(120)}> 120 </button>
                        <button className={(timer==90? "font-bold": "text-secondary") + " mx-3"} onClick={() => setTimer(90)}> 90  </button>
                        <button className={(timer==60? "font-bold": "text-secondary") + " mx-3"} onClick={() => setTimer(60)}> 60  </button>
                        <button className={(timer==10? "font-bold": "text-secondary") + " mx-3"} onClick={() => setTimer(10)}> 10  </button>
                    </div>
                </div>
                <div className=" flex flex-row justify-between">
                    <div className=" font-bold">
                        Letters
                    </div>
                    <div>
                        <button className={letters==12? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setLetter(12)}> 12 </button>
                        <button className={letters==10? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setLetter(10)}> 10  </button>
                        <button className={letters==9? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setLetter(9)}> 9  </button>
                    </div>
                </div>
            </div>
        </div>
    );
}