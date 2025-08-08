export default function Letter({ letter }: {letter : String}) {
  return (
    <div className=" bg-light-gray dark:bg-dark-gray mx-2 border-1 rounded-sm text-2xl">
      <div className="p-4">
        {letter}
      </div>
    </div>
  );
}