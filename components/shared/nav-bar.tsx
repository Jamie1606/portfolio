"use client";

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function NavBar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  const scrollTo = (elementID: string) => {
    setSheetOpen(false);
    setTimeout(() => {
      const element = document.getElementById(elementID);
      if (element) {
        const offset = 100; // Adjust this value to scroll slightly above
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset, // Scroll slightly above
          behavior: "smooth",
        });
      }
    }, 300);
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

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: isAtTop ? 0 : isVisible ? 0 : -80, opacity: isAtTop || isVisible ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className={cn("px-6 flex items-center justify-between md:px-12 lg:px-28 fixed top-0 left-0 w-full z-50 py-5 bg-[#F5F5F5]", !isAtTop && "shadow-md")}>
      <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
        <Link href="/" className="relative flex items-center justify-center rounded-lg bg-[#2A71D0] transition-all duration-200 hover:bg-transparent overflow-hidden hover-animation lg:hover:before:w-[25px]">
          <div className="relative cursor-pointer w-full z-10 m-0.5 px-3 py-1 rounded-lg text-[#2A71D0] font-semibold text-xl bg-[#F5F5F5] lg:text-[1.4rem] lg:px-4 lg:py-2">Z</div>
        </Link>
      </motion.div>
      <div className="flex items-center md:hidden">
        <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </SheetTrigger>
            <SheetContent className="bg-[#F5F5F5] w-3/5">
              <div className="w-full h-screen flex flex-col justify-center items-center">
                <label onClick={() => scrollTo("about")} className="text-[#333333] mb-10 text-lg cursor-pointer select-none">
                  <span className="text-[#2A71D0] font-semibold">01.</span> About
                </label>
                <label onClick={() => scrollTo("skill")} className="text-[#333333] mb-10 text-lg cursor-pointer select-none">
                  <span className="text-[#2A71D0] font-semibold">02.</span> Skill
                </label>
                <label onClick={() => scrollTo("project")} className="text-[#333333] mb-10 text-lg cursor-pointer select-none">
                  <span className="text-[#2A71D0] font-semibold">03.</span> Project
                </label>
                <Button variant="primary" onClick={() => window.open("https://drive.google.com/file/d/1mXGNMQgyisUgdpKZEMZyc9i0Ou0k11zm/view?usp=sharing", "_blank")}>
                  Resume
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex justify-end items-center gap-x-8 text-[0.9rem] xl:text-[1rem]">
            <NavigationMenuItem>
              <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] cursor-pointer hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8" onClick={() => scrollTo("about")}>
                  <span className="text-[#2A71D0] font-semibold">01.</span> About
                </NavigationMenuLink>
              </motion.div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] cursor-pointer hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8" onClick={() => scrollTo("skill")}>
                  <span className="text-[#2A71D0] font-semibold">02.</span> Skill
                </NavigationMenuLink>
              </motion.div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 0.8 }}>
                <NavigationMenuLink className="text-[#333333] hover:text-[#2A71D0] cursor-pointer hover:font-medium transition-all duration-200 hover:underline hover:underline-offset-8" onClick={() => scrollTo("project")}>
                  <span className="text-[#2A71D0] font-semibold">03.</span> Project
                </NavigationMenuLink>
              </motion.div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <motion.div initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.3, delay: 1 }}>
                <Button variant="primary" onClick={() => window.open("https://drive.google.com/file/d/1mXGNMQgyisUgdpKZEMZyc9i0Ou0k11zm/view?usp=sharing", "_blank")}>
                  Resume
                </Button>
              </motion.div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.div>
  );
}
