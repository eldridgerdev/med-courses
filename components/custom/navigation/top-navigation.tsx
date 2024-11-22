"use client";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useState, useEffect, HTMLAttributes } from "react";

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

const Logo = (props: HTMLAttributes<HTMLDivElement>) => (
  <Link href="/" className={`flex items-center space-x-2 ${props.className}`}>
    <span className="text-xl font-bold">Logo</span>
  </Link>
);
export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full borderb bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isScrolled && "shadow-sm",
      )}
    >
      <div className="container flex h-16 items-center">
        <Logo className="mx-8" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                ></NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
