import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { workFontClass } from "@/lib/fonts.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        className={`${workFontClass} font-sans flex min-h-screen flex-col items-center p-24 bg-softBackgroundColor gap-20`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
