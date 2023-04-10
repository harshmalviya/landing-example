import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import { Inter } from "next/font/google";
import Hero from "@/components/common/Hero";
import About from "@/components/common/About";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`h-full w-full ${inter.variable}`}>
      <div className={`bg-primary`}>
        <div className="max-w-[90%] md:max-w-7xl mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
      <>
        <About />
      </>
      <>
        <Footer />
      </>
    </main>
  );
}
