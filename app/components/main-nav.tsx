import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface NavLink {
  title: string;
  href: string;
}
const navLinks: NavLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Test1",
    href: "/",
  },
  {
    title: "Test2",
    href: "/",
  },
  {
    title: "Test3",
    href: "/",
  },
];

const linkClasses =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

export function MainNav({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6")} {...props}>
      {navLinks.map((link) => (
        <Link href={link.href} className={linkClasses} key={link.title}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
