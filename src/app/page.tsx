"use client";
import Link from "next/link";
import GridSection from "./Components/GridSection";
import ThemeSelector from "./Components/ThemeSelector";
import { useTheme } from "./context/ThemeContext";
import { delay, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { currentTheme } = useTheme();

  const [initLoading, setInitLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setInitLoading(false);
    },4000);
  }, [])


  if(initLoading){
    return (
      <div
        className="min-h-screen flex items-center justify-center flex-col font-sans transition-colors duration-500"
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.primary,
        }}
      >
        <motion.h1
          className="xl:text-[300px] md:text-[200px] text-[100px] leading-tight"
          initial={{ opacity: 0, filter: "blur(4px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Odd{" "}
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 15 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="italic"
          >
            Ones
          </motion.span>
        </motion.h1>
        <motion.p
          className="mt-4 text-2xl"
          initial={{ opacity: 0, filter: "blur(4px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          nEVER FolLoW tHE hERD
        </motion.p>
      </div>
    );
  }
  return (
    <div
      className="min-h-screen relative flex items-center justify-center flex-col font-sans transition-colors duration-500"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.primary,
      }}
    >
      <ThemeSelector />

      <div
        className="w-full h-35 fixed bottom-0 z-100 left-0 backdrop-blur-sm bg-white/1"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 15%, transparent 100%)",
        }}
      ></div>
      <section className="mx-auto max-w-7xl py-12">
        {/* Desktop Header */}
        <header className=" md:flex mb-8 items-start justify-between text-center">
          <div className="">
            <h1
              className="text-9xl leading-tight transition-colors duration-500"
              style={{ color: currentTheme.primary }}
            >
              Odd <span className="italic underline">Ones</span>
            </h1>
            <p
              className="mt-2 text-lg font-medium w-[50%] tracking-widest hover:w-[50%] transition-all duration-500 mx-auto"
              style={{ color: currentTheme.secondary }}
            >
              a collection of sites which goes against the norm
            </p>
            <Link
              href="https://github.com/kr0vi"
              target="_blank"
              className="mt-2 inline-block text-sm underline transition-colors duration-500"
              style={{ color: currentTheme.secondary }}
            >
              Site by Krovi. &gt;
            </Link>
          </div>
        </header>
      </section>

      <GridSection></GridSection>
      <footer className="w-full bg-black h-30">
        <h1 className="text-center text-[100px]">Krovi</h1>
      </footer>
    </div>
  );
}
