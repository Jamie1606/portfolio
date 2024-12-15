import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-28 mt-8">
      <Link href="/" className="relative flex items-center justify-center rounded-lg bg-[#2A71D0] transition-all duration-200 hover:bg-transparent overflow-hidden hover-animation">
        <div className="relative cursor-pointer w-full z-10 m-0.5 px-3 py-1 rounded-lg text-[#2A71D0] font-semibold text-xl bg-[#F5F5F5]">Z</div>
      </Link>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex w-72 justify-between items-center text-sm">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">Experience</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">Project</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
