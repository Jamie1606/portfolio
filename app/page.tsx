import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-16 mt-6">
          <Link href="/" className="font-semibold text-xl py-2 px-4 bg-slate-800 text-white dark:text-black dark:bg-slate-100 rounded-lg">
            Z
          </Link>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex w-80 justify-between items-center text-sm">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>Experience</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>Work</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="ms-12">Resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
