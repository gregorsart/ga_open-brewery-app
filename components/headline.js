import { bitterFontClass } from "@/lib/fonts.js";

export default function Headline({ children }) {
  return (
    <h1
      className={`${bitterFontClass} mx-auto my-auto font-serif text-3xl text-mediumBrownBackgroundColor font-black max-w-[15ch] text-center `}
    >
      {children}
    </h1>
  );
}
