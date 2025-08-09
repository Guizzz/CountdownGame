export default function Settings({timer, setTimer, letters, setLetter} : {timer:number, setTimer: Function, letters:number, setLetter: Function}){
    return (
        <div className="w-2/3 h-20 my-5 flex items-center justify-center">
            <div className=" w text-right m-4">
                Settings
            </div>
            <div className=" w-[1px] h-full bg-white dark:bg-light-white"/>
            <div className=" flex flex-col m-4 w-1/3 ">
                <div className=" flex flex-row justify-between">
                    <div className=" font-bold">
                        Time
                    </div>
                    <div>
                        <button className={timer==120? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setTimer(120)}> 120 </button>
                        <button className={timer==90? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setTimer(90)}> 90  </button>
                        <button className={timer==60? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setTimer(60)}> 60  </button>
                        <button className={timer==10? "mx-3 font-bold": "mx-3 text-secondary"} onClick={() => setTimer(10)}> 10  </button>
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