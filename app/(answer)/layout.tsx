"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const QuizNumber = 10;

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const number = parseInt(pathname.slice(2));

  return (
    <div>
      {children}
      <div className="mt-3 flex w-full flex-row justify-center">
        {number < QuizNumber ? (
          <Link
            href={`q${number + 1}`}
            className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-slate-600"
          >
            다음 문제 보기
          </Link>
        ) : (
          <Link
            href="/"
            className="block rounded-md bg-slate-800 px-2 py-1 text-white transition hover:bg-slate-600"
          >
            처음으로
          </Link>
        )}
      </div>
    </div>
  );
}
