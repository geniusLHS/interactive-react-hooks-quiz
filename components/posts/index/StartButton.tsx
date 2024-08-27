import Link from "next/link";

const StartButton = () => {
  return (
    <div className="mt-3 flex w-full flex-row justify-center">
      <Link
        href="q1"
        className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition focus:ring focus:ring-zinc-400 active:bg-zinc-600 dark:bg-zinc-200 dark:text-black dark:focus:ring-zinc-500 dark:active:bg-zinc-300"
      >
        start
      </Link>
    </div>
  );
};

export default StartButton;
