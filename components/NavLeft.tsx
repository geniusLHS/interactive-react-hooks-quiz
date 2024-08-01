"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const number = pathname.slice(2);

  return (
    <div className="hidden flex-col gap-4 rounded-lg bg-zinc-100 p-2 leading-tight md:flex">
      <Link
        href={`/`}
        className={cn("underline-offset-2 hover:underline", {
          "text-red-500": pathname === "/",
        })}
      >
        index
      </Link>
      {QuizNames.map((item, index) => (
        <Link
          key={index}
          href={`/q${index + 1}`}
          className={cn("underline-offset-2 hover:underline", {
            "text-red-500": number === `${index + 1}`,
          })}
        >
          {index + 1}. {item}
        </Link>
      ))}
      <div></div>
    </div>
  );
};

export default NavLeft;
