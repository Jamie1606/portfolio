"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button initial={{ y: 60 }} animate={{ y: isVisible ? -20 : 60 }} transition={{ duration: 0.3 }} onClick={scrollToTop} className="fixed bottom-0 z-50 right-3 lg:right-6 p-3 bg-[#2A71D0] text-white rounded-xl shadow-lg transition-all" aria-label="Go to top">
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;
