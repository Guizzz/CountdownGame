"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import Button from "./ui/Button";
import SecondaryButton from "./ui/SecondaryButton";



export default function LeaderBoard(){
    const [players, setPlayers] = useState(Array<{name:string, points: number}>)
    const [isVisible, setVisible] = useState(false)

    function Player ({player}: {player:{name:string, points: number}})
    {   
        console.log(player);
        const [points, setP] = useState(player.points)

        function setPoints(p:number)
        {
            setP(p);
            var players_copy = players;
            for(var pc of players_copy)
            {
                if(pc.name != player.name)
                    continue;
                
                pc.points++;
                setPlayers(players_copy);
                return;
            }

        }

        
        return(
            <div className=" flex flex-row justify-between">
                <div className=" flex flex-col justify-center items-center">
                    {player.name} : {points}
                </div>
                <div className=" flex flex-row">
                    <div onClick={()=> setPoints( points + 1)} className=" cursor-pointer m-2 rounded-sm hover:bg-green-200 hover:text-black ease-in-out duration-200">
                        <button className=" font-bold mx-2 text-xl"> + </button>
                    </div>
                    <div onClick={()=> setPoints(points - 1 )} className=" cursor-pointer m-2 rounded-sm hover:bg-red-200 hover:text-black ease-in-out duration-200">
                        <button className=" font-bold mx-2 text-xl"> - </button>
                    </div>
                </div>
            </div>
        );
    }

    function PlayersSection({players_list}: {players_list:Array<{name:string, points: number}>}){
        return(
            <div className=" w-1/2">
                {
                    players_list.map((p, index) =>
                        <div className="py-2 " key={index}>
                            <Player player={p}/>
                        </div>
                    )
                }
            </div>
        );
    }
    
    function submit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
        };
        const name = target.name.value;
        var p = players;
        p.push({name:name, points:0});
        setPlayers([...p]);
        target.name.value = "";
        console.log(players)
    }

    function open()
    {
        setVisible(true)
    }

    function close()
    {
        setVisible(false)
    }

    return (
        <div>
            <div className={isVisible?"absolute w-full h-full bg-black/50":""} onClick={()=>{ isVisible?close():"" }}/>
            <div className=" absolute m-8 right-1/12 bottom-1/3 ">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => open()} 
                    className=" cursor-pointer drop-shadow-xl flex flex-col justify-center items-center">
                    <div className=" bg-button p-4 rounded-full z-10">
                        <img src="cup.svg" className=" drop-shadow-md "  alt="" />
                    </div>
                </motion.button>
            </div>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="box"
                        className="m-auto p-2 left-0 right-0 top-1/6 absolute w-1/2 rounded-md backdrop-blur-sm bg-white/30 shadow-xl"
                    >
                        <div >
                            <div className=" flex flex-col items-center justify-center m-4">
                                <div className="text-2xl">
                                    Leader Board
                                </div>
                                <div className=" mx-auto mb-5 w-2/3 h-[1px] bg-light-black dark:bg-text"/>
                                <PlayersSection players_list={players} />
                                <div>
                                    <form onSubmit={submit}>
                                        <input type="text" name="name" placeholder="Player" className=" bg-black/20 p-2 rounded-sm"/>
                                        <SecondaryButton active={true} f={()=>{}}>
                                            <input type="submit" value="Add Player"/>
                                        </SecondaryButton>
                                    </form>
                                </div>
                                <Button active={true} f={close}> Close</Button>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            
        </div>
    );
}