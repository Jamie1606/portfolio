import FacebookIcon from "@/icons/facebook";
import GitHubIcon from "@/icons/github";
import GmailIcon from "@/icons/gmail";
import InstagramIcon from "@/icons/instagram";
import LinkedInIcon from "@/icons/linkedin";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full py-8 mt-12 items-center">
      <div className="gap-x-10 flex w-full justify-center md:gap-x-6 mb-4">
        <Link href="https://github.com/Jamie1606" target="_blank">
          <GitHubIcon width={22} height={22} fill="#181717" />
        </Link>
        <Link href="">
          <FacebookIcon width={22} height={22} fill="#0866FF" />
        </Link>
        <Link href="">
          <InstagramIcon width={22} height={22} fill="#FF0069" />
        </Link>
        <Link href="https://www.linkedin.com/in/zayyartun2025" target="_blank">
          <LinkedInIcon width={22} height={22} fill="#0A66C2" />
        </Link>
        <Link href="">
          <GmailIcon width={22} height={22} fill="#EA4335" />
        </Link>
      </div>
      <label className="text-sm text-slate-700 md:text-base">&copy;{new Date().getFullYear()} All rights reserved. Built by Zay Yar Tun</label>
    </footer>
  );
}
