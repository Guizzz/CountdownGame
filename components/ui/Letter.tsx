export default function Letter({ letter }: {letter : String}) {
  return (
    <div className="h-15 w-10 bg-dark-gray mx-2
                    bg-letters
                    rounded-sm text-2xl 
                    flex flex-col justify-center items-center shadow-letteres">
      <div className="text-2xl">
        {letter}
      </div>
    </div>
  );
}
