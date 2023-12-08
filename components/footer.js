import Image from "next/image";
import { workFontClass } from "@/lib/fonts.js";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-between  bg-mediumGrayBackgroundColor px-10 lg:px-60">
      <a
        className="pointer-events-none lg:pointer-events-auto lg:p-0"
        href="https://gregorsart.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/gregorsart-logo.png"
          alt="gregorsart logo"
          width={28}
          height={28}
          priority
        />
      </a>
      <p className={`${workFontClass} font-sans`}>Copryright gregorsart 2023</p>
    </div>
  );
}
