import Letter from "./Letter";


export default function Board({ letters } : { letters : Array<String> }) {

  return (
    <>
      <div className=" flex flex-row justify-center items-center m-5">

        {
          letters.map((l, index) =>
                <Letter key={index} letter={l} />
            )
        }
        
      </div>
    </>
  );
}