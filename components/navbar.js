import { workFontClass } from "@/lib/fonts.js";
export default function navbar() {
  return (
    <div className="z-10 w-full flex items-center justify-center font-serif lg:flex bg-mediumBackgroundColor h-28">
      <p className={`${workFontClass} font-sans`}>
        Get started by editing&nbsp;
      </p>
    </div>
  );
}
