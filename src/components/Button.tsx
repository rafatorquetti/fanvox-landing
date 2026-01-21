import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        rounded-xl px-6 py-3
        text-sm font-semibold

        bg-indigo-600 text-white

        transition-colors transition-shadow duration-200 ease-out

        hover:bg-indigo-500
        hover:text-indigo-50
        hover:shadow-[0_6px_18px_rgba(79,70,229,0.22)]

        active:bg-indigo-600
        active:text-white
        active:shadow-[0_3px_10px_rgba(79,70,229,0.18)]

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-500/40
        focus-visible:ring-offset-2
        focus-visible:ring-offset-transparent
      "
    >
      {children}
    </Link>
  );
}
