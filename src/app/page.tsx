"use client";
import Link from "next/link";
import GridSection from "./Components/GridSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf7] relative  flex items-center justify-center flex-col font-sans text-[#e24b2b]  transition-colors duration-500">
      <div
        className="w-full h-35  fixed bottom-0 z-100 left-0  backdrop-blur-sm bg-white/20 "
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 70%, transparent 100%)"
        }}
      ></div>
      <section className="mx-auto max-w-7xl py-12 ">
        {/* Desktop Header */}
        <header className="hidden md:flex mb-8 items-start justify-between text-center ">
          <div>
            <h1 className="text-7xl leading-tight text-[#e24b2b]  transition-colors duration-500">
              Odd Ones
            </h1>
            <p className="mt-2 text-[#d65b3b] text-lg w-[8%] hover:w-[50%] transition-all duration-500 mx-auto">
              In its ruggedness and lack of concern to look comfortable or easy,
              Brutalism can be seen as a reaction by a younger generation to the
              lightness, optimism, and frivolity of today's web design.
            </p>
            <Link
              href="https://krovi.dev"
              className="mt-2 inline-block text-[#d65b3b]  underline transition-colors duration-500"
            >
              Site by Krovi. &gt;
            </Link>
          </div>
        </header>
      </section>

      <GridSection></GridSection>
    <footer className="w-full bg-black h-30">
      <h1 className=" text-center text-[100px]">Krovi</h1>
    </footer>
    </div>
  );
}
