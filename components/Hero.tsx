import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-28 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.04] flex items-center justify-center absolute top-0 left-0 pointer-events-none">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-12 lg:my-16 z-10">
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14 px-2 sm:px-4">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Intro Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md text-xs sm:text-sm text-purple font-medium mb-3 shadow-[0_0_20px_rgba(203,172,249,0.15)]">
              <span className="w-2 h-2 rounded-full bg-purple animate-pulse" />
              <span>Full-Stack Developer • DevOps Engineer • AI/ML Enthusiast</span>
            </div>

            <TextGenerateEffect
              className="mt-2 text-center lg:text-left text-[34px] sm:text-5xl lg:text-[60px] font-extrabold tracking-tight"
              words="From Pixels to Pipelines — I Build It All"
            />

            <p className="text-center lg:text-left md:tracking-wide my-4 text-sm md:text-base lg:text-lg text-white-100 max-w-2xl leading-relaxed">
              Hi, I&apos;m <span className="text-white font-semibold">Manav</span> — a developer who builds full-stack apps, architects cloud infrastructure, and ships AI-powered products end to end. Final Year AI &amp; ML at DJSCE, Mumbai.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
              <a title="My Experience" href="#experience" className="w-full sm:w-auto">
                <MagicButton
                  title="My Experience"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a
                title="My Projects"
                href="#projects"
                className="w-full sm:w-auto"
              >
                <button className="relative inline-flex h-12 w-full sm:w-44 items-center justify-center rounded-lg border border-white/[0.18] bg-black-100/80 px-6 text-sm font-medium text-white transition-all duration-200 hover:bg-white/[0.08] hover:border-purple/60 focus:outline-none md:mt-10">
                  My Projects
                </button>
              </a>
              <a
                title="Download Resume"
                href="/Manav_Gohil_Resume.pdf"
                download="Manav_Gohil_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="relative inline-flex h-12 w-full sm:w-44 items-center justify-center gap-2 rounded-lg border border-purple/40 bg-purple/10 px-5 text-sm font-medium text-purple hover:bg-purple/20 transition-all duration-200 hover:border-purple focus:outline-none md:mt-10 shadow-[0_0_15px_rgba(203,172,249,0.15)]">
                  <FaDownload className="text-xs" />
                  <span>Resume</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right: Profile Image Card */}
          <div className="flex-shrink-0 relative group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple via-indigo-500 to-sky-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse" />

            {/* Glowing Border Container */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-b from-purple/70 via-purple/20 to-transparent">
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black-100 shadow-2xl w-60 h-60 sm:w-72 sm:h-72 lg:w-88 lg:h-88 xl:w-96 xl:h-96">
                <img
                  src="/manav.jpeg"
                  alt="Manav Gohil"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-100/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;