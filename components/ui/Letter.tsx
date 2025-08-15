export default function Letter({ letter }: {letter : String}) {
  return (
    <div className="h-10 w-6 min-[480px]:h-12 min-[480px]:w-8 min-md:h-15 min-md:w-10 bg-dark-gray mx-1 min-md:mx-2
                    bg-letters
                    rounded-sm 
                    flex flex-col justify-center items-center shadow-letteres">
      <div className="text-lg min-md:text-2xl ">
        {letter}
      </div>
    </div>
  );
}
