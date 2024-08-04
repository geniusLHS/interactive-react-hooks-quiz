"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const QuizNames = [
  "double useState",
  "useState with setTimeout",
  "useState with object",
  "useState in if statement",
  "useEffect dependency array",
  "cleanup in useEffect",
  "the key prop",
  "condition of preserving state",
];

const NavLeft = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const number = pathname.slice(2);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else {
      setTheme("light");
    }
  };

  return (
    <div className="hidden flex-col gap-4 rounded-lg bg-zinc-100 p-2 leading-tight md:flex dark:bg-zinc-800">
      <Link
        href={`/`}
        className={cn("underline-offset-2 hover:underline", {
          "text-red-500 dark:text-red-400": pathname === "/",
        })}
      >
        index
      </Link>
      {QuizNames.map((item, index) => (
        <Link
          key={index}
          href={`/q${index + 1}`}
          className={cn("underline-offset-2 hover:underline", {
            "text-red-500 dark:text-red-400": number === `${index + 1}`,
          })}
        >
          {index + 1}. {item}
        </Link>
      ))}
      <div className="flex flex-row">
        {/* <p>The current theme is: {theme}</p> */}
        <button
          onClick={toggleTheme}
          className={cn(
            "transition/hover rounded-md px-0.5 py-1 transition hover:bg-zinc-200 dark:hover:bg-zinc-700",
            { hidden: theme === "light" },
          )}
        >
          <Moon className="h-5" />
        </button>
        <button
          onClick={toggleTheme}
          className={cn(
            "transition/hover rounded-md px-0.5 py-1 transition hover:bg-zinc-200 dark:hover:bg-zinc-700",
            { hidden: theme === "dark" },
          )}
        >
          <Sun className="h-5" />
        </button>
      </div>
    </div>
  );
};

export default NavLeft;
