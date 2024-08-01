import Link from "next/link";

const StartButton = () => {
  return (
    <div className="mt-3 flex w-full flex-row justify-center">
      <Link
        href="q1"
        className="block rounded-md bg-zinc-800 px-2 py-1 text-white"
      >
        start
      </Link>
    </div>
  );
};

export default StartButton;
