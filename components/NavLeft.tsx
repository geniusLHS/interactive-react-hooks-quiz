"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Coffee, Github, LoaderCircle, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  const number = pathname.slice(2);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="flex flex-row gap-1">
        {!mounted ? (
          <button
            onClick={toggleTheme}
            className={cn(
              "rounded-md px-0.5 py-1 transition hover:bg-zinc-200 dark:hover:bg-zinc-700",
              { hidden: theme === "light" },
            )}
          >
            <LoaderCircle className="h-5 animate-spin" />
          </button>
        ) : (
          <>
            <button
              onClick={toggleTheme}
              className={cn(
                "rounded-md px-0.5 py-1 transition hover:bg-zinc-200 dark:hover:bg-zinc-700",
                { hidden: theme === "light" },
              )}
            >
              <Moon className="h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className={cn(
                "rounded-md px-0.5 py-1 transition hover:bg-zinc-200 dark:hover:bg-zinc-700",
                { hidden: theme !== "light" },
              )}
            >
              <Sun className="h-5" />
            </button>
          </>
        )}
        <a
          className={cn(
            "rounded-md px-0.5 py-1 transition hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700",
          )}
          target="_blank"
          href="https://github.com/geniusLHS/interactive-react-hooks-quiz"
        >
          <Github className="h-5" />
        </a>
        <a
          className={cn(
            "rounded-md px-0.5 py-1 transition hover:cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700",
          )}
          target="_blank"
          href="https://www.buymeacoffee.com/geniuslhs"
        >
          <Coffee className="h-5" />
        </a>
      </div>
    </div>
  );
};

export default NavLeft;
