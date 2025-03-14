"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function NavBar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  const scrollTo = (elementID: string) => {
    setSheetOpen(false);
    setTimeout(() => {
      document.getElementById(elementID)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 150) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);

        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: isAtTop ? 0 : isVisible ? 0 : -100, opacity: isAtTop || isVisible ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={cn("px-6 flex items-center justify-between md:px-12 lg:px-28 fixed top-0 left-0 w-full z-50 py-5 bg-[#F5F5F5]", !isAtTop && " shadow-md")}>
      <Link href="/" className="relative flex items-center justify-center rounded-lg bg-[#2A71D0] transition-all duration-200 hover:bg-transparent overflow-hidden hover-animation lg:hover:before:w-[25px]">
        <div className="relative cursor-pointer w-full z-10 m-0.5 px-3 py-1 rounded-lg text-[#2A71D0] font-semibold text-xl bg-[#F5F5F5] lg:text-[1.4rem] lg:px-4 lg:py-2">Z</div>
      </Link>
      <div className="flex items-center md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </SheetTrigger>
          <SheetContent className="bg-[#F5F5F5] w-3/5">
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <Link href="#" onClick={() => scrollTo("about")} className="text-[#333333] mb-10 text-lg">
                <span className="text-[#2A71D0] font-semibold">01.</span> About
              </Link>
              <Link href="#" onClick={() => scrollTo("skill")} className="text-[#333333] mb-10 text-lg">
                <span className="text-[#2A71D0] font-semibold">02.</span> Skill
              </Link>
              <Link href="#" onClick={() => scrollTo("project")} className="text-[#333333] mb-10 text-lg">
                <span className="text-[#2A71D0] font-semibold">03.</span> Project
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-end items-center gap-x-8 text-[0.9rem] xl:text-[1rem]">
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">
                  <span className="text-[#2A71D0] font-semibold">01.</span> About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#skill" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">
                  <span className="text-[#2A71D0] font-semibold">02.</span> Skill
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#project" legacyBehavior passHref>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8">
                  <span className="text-[#2A71D0] font-semibold">03.</span> Project
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
    // <div className={cn("px-10 flex items-center justify-between md:px-12 lg:px-28 mt-8 transition-all duration-300", !isAtTop && (isVisible ? "fixed mt-0 top-0 left-0 w-full bg-[#F5F5F5] shadow-lg z-50 py-3 translate-y-0" : "-translate-y-full"))}>

    // </div>
  );
}
