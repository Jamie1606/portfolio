"use client";

import FacebookIcon from "@/icons/facebook";
import GitHubIcon from "@/icons/github";
import GmailIcon from "@/icons/gmail";
import InstagramIcon from "@/icons/instagram";
import LinkedInIcon from "@/icons/linkedin";
import Link from "next/link";
import { motion } from "framer-motion";
import BusinessCardIcon from "@/icons/business-card";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full py-8 mt-12 items-center">
      <div className="gap-x-10 flex w-full justify-center items-center md:gap-x-6 mb-4">
        <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.5 }}>
          <Link href="https://github.com/Jamie1606" target="_blank">
            <GitHubIcon width={22} height={22} fill="#181717" />
          </Link>
        </motion.div>
        <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 0.8 }}>
          <Link href="https://www.linkedin.com/in/zayyartun2025" target="_blank">
            <LinkedInIcon width={22} height={22} fill="#0A66C2" />
          </Link>
        </motion.div>
        <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.1 }}>
          <Link href="mailto:zyt.tharthar@gmail.com">
            <GmailIcon width={22} height={22} fill="#EA4335" />
          </Link>
        </motion.div>
        <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.4 }}>
          <Link href="https://hihello.me/p/f9257756-1436-46aa-9a6f-fde37252e9c5" target="_blank">
            <BusinessCardIcon width={35} height={35} fill="#2A71D0" title="My Digital Card" />
          </Link>
        </motion.div>
      </div>
      <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: 1.7 }}>
        <label className="text-sm text-slate-700 md:text-base">&copy;{new Date().getFullYear()} All rights reserved. Built by Zay Yar Tun</label>
      </motion.div>
    </footer>
  );
}
