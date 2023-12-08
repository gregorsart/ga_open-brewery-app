import { bitterFontClass } from "@/lib/fonts.js";

export default function Headline({ children }) {
  return (
    <h2
      className={`${bitterFontClass} mx-auto font-serif mb-3 text-3xl text-mediumBrownBackgroundColor font-black max-w-[15ch]`}
    >
      {children}
    </h2>
  );
}
