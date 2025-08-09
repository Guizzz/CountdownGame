"use client"
import { useEffect, useState } from "react";
import Board from "../components/ui/Board";
import Result from "../components/Result";
import Button from "../components/ui/Button";
import Cowntdown from "../components/Cowntdown";
import Settings from "../components/ui/Settings";
import { checkWords, getLetters } from "../server/server";

export default function Home() {
  
  
  const [letters, setletters] = useState([""]);
  const [resWords, setResWords] = useState(Array<{len:number, words:Array<String>}>);
  const [playState, setPlayState] = useState(false);
  const [checkPressed, setCheck] = useState(false);
  const [isCDEnd, setIsCDEnd] = useState(false);
  
  const [timerTime, setTimerTime] = useState(120);
  const [lettersNumber, setLettersNumber] = useState(12);

  useEffect(()=>{
    setletters(Array(lettersNumber).fill(""));
  }, [lettersNumber]);

  function reset()
  {
    setletters(Array(lettersNumber).fill(""));
    setResWords([]);
    setPlayState(false);
    setIsCDEnd(false);
    setCheck(false);
  }

  async function generate()
  { 
    const letter_list = await getLetters(lettersNumber);
    console.log(letter_list.length)
    console.log(letter_list)
    setletters(letter_list);
    setPlayState(true);
    
    var outputDict:Array<{len:number, words:Array<String>}> = await checkWords(letter_list);
    console.log(outputDict)
    setResWords(outputDict)

  }

  async function check()
  {
    console.log("check!");
    setCheck(true);
  }

  function set_t(time:number)
  {
    if(!playState || isCDEnd)
      setTimerTime(time);
  }

  function set_l(len:number)
  {
    if(!playState || isCDEnd)
      setLettersNumber(len);
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      {/* <p> Find the longhest word using only the given letters, and beat the AI!</p> */}
      <Cowntdown start={playState} timer={timerTime} callback={setIsCDEnd}/>
      <Board letters={letters}/>
      <Settings setLetter={set_l} setTimer={set_t} timer={timerTime} letters={lettersNumber}/>
      <div className="m-4">
        <Button f={reset} active={playState}> RESET </Button>
        <Button f={generate} active={!playState}> RANDOM </Button>
        <Button f={check} active={isCDEnd}> CHECK </Button>
      </div>
      <Result words={resWords} display={checkPressed}/>
    </div>
  );
}
