"use client";

import GitHubIcon from "@/icons/github";
import GmailIcon from "@/icons/gmail";
import LinkedInIcon from "@/icons/linkedin";
import Link from "next/link";
import { motion } from "framer-motion";
import BusinessCardIcon from "@/icons/business-card";

const SocialMedia = () => {
  return (
    <div className="hidden fixed right-8 min-h-screen justify-center lg:flex">
      <div className="flex flex-col gap-y-8 items-center my-auto">
        <motion.div initial={{ x: 80 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
          <Link href="https://github.com/Jamie1606" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <GitHubIcon width={22} height={22} fill="#181717" title="GitHub" />
          </Link>
        </motion.div>
        <motion.div initial={{ x: 80 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
          <Link href="https://www.linkedin.com/in/zayyartun2025" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <LinkedInIcon width={22} height={22} fill="#0A66C2" title="LinkedIn" />
          </Link>
        </motion.div>
        <motion.div initial={{ x: 80 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.7 }}>
          <Link href="mailto:zyt.tharthar@gmail.com" className="hover:scale-110 transition-transform duration-300">
            <GmailIcon width={22} height={22} fill="#EA4335" title="Email Me" />
          </Link>
        </motion.div>
        <motion.div initial={{ x: 80 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.9 }}>
          <Link href="https://hihello.me/p/f9257756-1436-46aa-9a6f-fde37252e9c5" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <BusinessCardIcon width={35} height={35} fill="#2A71D0" title="My Digital Card" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMedia;
