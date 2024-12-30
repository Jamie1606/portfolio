import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function NavBar() {
  return (
    <div className="px-4 flex items-center justify-between lg:px-28 mt-8">
      <Link href="/" className="relative flex items-center justify-center rounded-lg bg-[#2A71D0] transition-all duration-200 hover:bg-transparent overflow-hidden hover-animation">
        <div className="relative cursor-pointer w-full z-10 m-0.5 px-3 py-1 rounded-lg text-[#2A71D0] font-semibold text-xl bg-[#F5F5F5]">Z</div>
      </Link>
      <div className="flex items-center lg:hidden">
        <Sheet>
          <SheetTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </SheetTrigger>
          <SheetContent className="bg-[#F5F5F5] w-3/5">
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <Link href="/" className="text-[#333333] mb-10 text-lg">
                About
              </Link>
              <Link href="/" className="text-[#333333] mb-10 text-lg">
                Experience
              </Link>
              <Link href="/" className="text-[#333333] mb-10 text-lg">
                Project
              </Link>
              <Link href="/" className="text-[#333333] mb-10 text-lg">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex items-center">
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
