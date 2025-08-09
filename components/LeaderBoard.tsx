"use client"

import { useState } from "react";

function Player ({player}: {player:{name:string, points: number}})
{
    console.log(player);
    const [points, setPoints] = useState(player.points)
    return(
        <div className=" flex flex-row justify-between">
            <div className=" flex flex-col justify-center items-center">
                {player.name} : {points}
            </div>
            <div className=" flex flex-row">
                <div onClick={()=> setPoints(points + 1 )} className=" cursor-pointer border-2 m-2 rounded-sm hover:bg-gray-300 hover:text-black ease-in-out duration-300">
                    <button className=" font-bold mx-2 text-xl"> + </button>
                </div>
                <div onClick={()=> setPoints(points - 1 )} className=" cursor-pointer border-2 m-2 rounded-sm hover:bg-gray-300 hover:text-black ease-in-out duration-300">
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

export default function LeaderBoard(){
    const [players, setPlayers] = useState(Array<{name:string, points: number}>)
    const [isVisible, setVisible] = useState(false)
    
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

    return (
        <div>
            <div className=" absolute top-1/3 left-0 w-1/4 bg-light-gray dark:bg-dark-gray rounded-r-md ">
                <div className=" flex flex-col items-center justify-center m-4">
                    <div className="text-2xl">
                        Leader Board
                    </div>
                    <div className=" mx-auto mb-5 w-2/3 h-[1px] bg-light-black dark:bg-light-white"/>
                    <PlayersSection players_list={players} />
                    <div>
                        <form onSubmit={submit}>
                            <input type="text" name="name" placeholder="Player" className=" bg-gray-500 p-2 rounded-sm"/>
                            <input type="submit" value="Add Player" className="cursor-pointer border-2 p-2 m-2 rounded-sm hover:bg-gray-300 hover:text-black ease-in-out duration-300"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}