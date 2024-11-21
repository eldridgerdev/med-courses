import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const headerClasses =
  "sticky top-0 z-50 w-full border-b-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border";
export default function TopNav() {
  return (
    <header className={headerClasses}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Test
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex h-14 max-w-screen-2xl mx-auto justify-center ">
        <div className="py-4 mx-4 items-center"></div>
      </div>
    </header>
  );
}
