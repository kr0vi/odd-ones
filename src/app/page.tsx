"use client";
import Link from "next/link";
import GridSection from "./Components/GridSection";
import ThemeSelector from "./Components/ThemeSelector";
import { useTheme } from "./context/ThemeContext";
import { AnimatePresence, delay, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const { currentTheme } = useTheme();

  const [popup, setPopup] = useState(true);

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

      {/* BLUR */}
      <div
        className="w-full h-35 fixed bottom-0 z-100 left-0 backdrop-blur-sm bg-white/1"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to top, black 15%, transparent 100%)",
        }}
      ></div>
      {/* DELETE POP UP  */}
      <AnimatePresence>
      {popup && (
          <div className="w-full h-full fixed bg-black/40 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
              className="md:w-[30vw] h-[30vh] relative  bg-[#fffaf7] text-black  flex flex-col items-center justify-center gap-10 p-4"
            >
              <p className="text-center text-2xl">
                If any of the sites listed here go down or are no longer
                available, please click not available to remove them from the
                list.
              </p>
              <p className="text-center text-black">
                i will remove them as soon as possible 😊
              </p>
              <button
                className="absolute top-5 right-5 font-bold cursor-pointer text-sm underline"
                onClick={() => setPopup(false)}
              >
                CLOSE
              </button>
            </motion.div>
          </div>
      )}
      </AnimatePresence>
      {/* HEADER */}
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
