
// https://dictionary.cambridge.org/dictionary/english/
function ResultRow({words_list}: {words_list: Array<String>})
{   
    function openInNewTab(word:String) {
        const newWindow = window.open( "https://dictionary.cambridge.org/dictionary/english/" + word , '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return(
        <div className=" text-2xl">{
            words_list.map((word, index) =>
                <span className=" px-2 hover:underline cursor-pointer" key={index} onClick={() => openInNewTab(word)}>{word}</span>
            )
        }
        </div>
    )
}

export default function Result({ words, display }: {words:Array<{len:number, words:Array<String>}>, display: boolean}) {

    if (words == null || words.length == 0 || !display)
        return;

    return (
        <div className=" w-full min-md:w-3/4 min-lg:w-1/">
            {
                words.map((value, index) => ( 
                    <div key={index} className=" bg-light-gray dark:bg-dark-gray m-4 p-5 rounded-sm"> 
                        <span className=" font-bold text-2xl"> {value.len} </span> <span className=" italic"> letters </span> 
                        <ResultRow words_list={value.words}/>
                    </div> 
                ))
            }
        </div>
    );
}