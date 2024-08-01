"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const number = pathname.slice(2);

  return (
    <div>
      {children}
      <div className="mt-3 flex w-full flex-row justify-center">
        <Link
          href={`a${number}`}
          className="block rounded-md bg-zinc-800 px-2 py-1 text-white transition hover:bg-zinc-600"
        >
          정답 보기
        </Link>
      </div>
    </div>
  );
}
