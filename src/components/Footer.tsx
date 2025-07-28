"use client";

import Link from "next/link";
import { useSoundContext } from "@/components/SoundProvider";

const Footer = () => {
  const { playSound } = useSoundContext();

  return (
    <footer className="relative py-8 text-mgs-white/60 text-sm border-t-2 border-mgs-green bg-mgs-black/90 backdrop-blur-sm">
      <div className="w-full px-8 lg:px-12 xl:px-16 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center justify-center">
          <Link 
            href="/"
            onClick={() => playSound("return")}
            className="text-xs sm:text-sm md:text-base font-mgs2-menu text-mgs-green uppercase tracking-normal sm:tracking-wide md:tracking-widest hover:text-mgs-green/80 transition-colors duration-200 cursor-pointer text-center block"
          >
            Holy Grail Studio
          </Link>
        </div>
        <p className="text-center text-mgs-white/60 font-tactical">
          All rights reserved
        </p>
        <p className="text-center mt-2 text-mgs-green/60 font-mgs2 text-xs uppercase tracking-wider">
          [ TACTICAL SOFTWARE DEVELOPMENT ]
        </p>
      </div>
    </footer>
  );
};

export default Footer;