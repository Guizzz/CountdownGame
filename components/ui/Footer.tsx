export default function Footer() {
  return (
    <footer className=" mt-10 
                       bg-[var(--color-letters)] 
                       text-[var(--color-text)]
                       flex items-center justify-center
                       ">
      <div className=" flex-col items-center justify-center p-4">
        <div className="font-bold">
          The CountDown <span className=" italic"> Game</span>
        </div>
        <div className=" w-full h-[1px] my-2 bg-secondary"/>
        <div className=" text-center">
          by Guizzz
        </div>
      </div>
    </footer>
  );
}