import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { workFontClass } from "@/lib/fonts.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main
        className={`${workFontClass} font-sans flex min-h-screen flex-col items-center bg-softBackgroundColor gap-6 py-12 px-6 mb-16`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
