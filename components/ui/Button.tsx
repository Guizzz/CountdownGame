
export default function Button({active, f, children}: {active:Boolean, f: Function, children: React.ReactNode}){
    if (!active)
        return
    return(
        <button onClick={() => f()} className=" cursor-pointer p-2 m-2 rounded-sm 
                bg-button hover:bg-gray-300 hover:text-black 
                ease-in-out duration-300
                shadow-md"> 
            {children} 
        </button>
    );
}