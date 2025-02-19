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
    <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} transition={{ duration: 0.3 }} onClick={scrollToTop} className="fixed bottom-6 right-6 p-3 bg-[#2A71D0] text-white rounded-xl shadow-lg transition-all" aria-label="Go to top">
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;
