"use client";
import React from "react";
import { achievements } from "@/data";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaExternalLinkAlt, FaStar, FaUsers } from "react-icons/fa";

const Achievements = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Leadership":
        return <FaUsers className="text-purple" />;
      case "Hackathon Win":
        return <FaTrophy className="text-amber-400" />;
      case "Hackathon Finalist":
        return <FaStar className="text-cyan-400" />;
      default:
        return <FaAward className="text-purple" />;
    }
  };

  // Visual showcase card for each achievement with real image
  const renderAchievementVisual = (achievement: typeof achievements[0], index: number) => {
    return (
      <div className="relative w-full h-72 sm:h-80 lg:h-[380px] rounded-3xl overflow-hidden border border-white/15 bg-[#04071d] group shadow-2xl transition-all duration-300 hover:border-purple/50 hover:shadow-[0_0_35px_rgba(203,172,249,0.15)]">
        {/* Ambient Gradient Background Glow */}
        <div
          className={`absolute -inset-1 bg-gradient-to-br ${achievement.badgeColor} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}
        />

        {/* Real Image */}
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04071d]/90 via-[#04071d]/20 to-black/50 pointer-events-none" />

        {/* Top Header Overlay Bar */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
          <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white shadow-lg flex items-center gap-1.5">
            {getCategoryIcon(achievement.category)}
            <span>{achievement.badge}</span>
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-black/60 backdrop-blur-md font-mono text-white-200">
            {achievement.period}
          </span>
        </div>

        {/* Bottom Bar overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 max-w-[65%]">
            {index === 0 && (
              <img
                src="/codeai.png"
                alt="Logo"
                className="w-7 h-7 object-contain rounded-lg bg-black/60 p-1 border border-white/20"
              />
            )}
            <p className="text-xs sm:text-sm text-white font-semibold truncate drop-shadow-md">
              {achievement.organization}
            </p>
          </div>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-purple/40 bg-black/75 backdrop-blur-md text-xs font-medium text-purple hover:text-white hover:border-purple transition-all shadow-md"
            >
              <span>{achievement.linkText || "View"}</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 w-full relative" id="achievements">
      {/* Section Heading */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md text-xs sm:text-sm text-purple font-medium mb-3">
          <FaTrophy className="text-xs text-amber-400" />
          <span>Extracurriculars & Honors</span>
        </div>
        <h1 className="heading">
          Achievements & <span className="text-purple">Leadership</span>
        </h1>
        <p className="text-white-200 text-sm sm:text-base mt-4 max-w-2xl mx-auto opacity-75">
          From co-founding DJSCE&apos;s premier AI club to winning high-stakes 36-hour hackathons — building solutions that create real impact.
        </p>
      </div>

      {/* Alternating Showcase Cards */}
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 px-4">
        {achievements.map((item, index) => {
          // Even index: content left, visual right (on desktop)
          // Odd index: visual left, content right (on desktop)
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-14`}
            >
              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                {/* Category & Badge */}
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white">
                    {getCategoryIcon(item.category)}
                    <span>{item.badge}</span>
                  </div>
                  <span className="text-xs text-white-200/70 font-mono">
                    {item.period}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-purple mt-1 mb-4">
                  {item.organization}
                </p>

                {/* Description narrative */}
                <p className="text-sm sm:text-base text-white-100/90 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2.5 mb-6 w-full">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs sm:text-sm text-white-200 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-white-200 border border-white/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple/40 bg-purple/10 hover:bg-purple/20 text-purple font-medium text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(203,172,249,0.15)]"
                  >
                    <span>{item.linkText || "Explore Project"}</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>

              {/* Visual Side (Achievement Image) */}
              <div className="w-full lg:w-1/2">
                {renderAchievementVisual(item, index)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
