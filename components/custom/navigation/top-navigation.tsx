"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, HTMLAttributes } from "react";

interface NavLink {
  title: string;
  href: string;
  id: number;
}
const navLinks: NavLink[] = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "Test1",
    href: "/",
  },
  {
    id: 2,
    title: "Test2",
    href: "/",
  },
  {
    id: 3,
    title: "Test3",
    href: "/",
  },
];

const Logo = (props: HTMLAttributes<HTMLDivElement>) => (
  <Link href="/" className={`flex items-center space-x-2 ${props.className}`}>
    <span className="text-xl font-bold">Logo</span>
  </Link>
);

const SmallScreenMenu = (props: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-1 items-center justify-end space-x-4 ${props.className}`}
  >
    <nav className="flex items-center space-x-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" data-sidebar="sidebar" data-mobile="true">
          <SheetHeader>
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Sidebar</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item: NavLink) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <Link href={nav.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                    )}
                  >
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <SmallScreenMenu className="mr-10" />
      </div>
    </header>
  );
}
