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

  // Modern stylized placeholder visuals for each achievement
  const renderPlaceholderVisual = (achievement: typeof achievements[0], index: number) => {
    return (
      <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0c0f2e] via-[#080b21] to-[#04071d] p-6 flex flex-col justify-between group shadow-2xl">
        {/* Ambient Gradient Background Glow */}
        <div
          className={`absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br ${achievement.badgeColor} blur-3xl opacity-25 group-hover:opacity-40 transition-opacity duration-500`}
        />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple/20 blur-3xl opacity-20" />

        {/* Top bar of placeholder graphic */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-white-200/50 ml-2">
              showcase-{achievement.id}.png
            </span>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full border border-white/15 bg-white/5 font-mono text-white-200">
            {achievement.period}
          </span>
        </div>

        {/* Center Graphic Badge */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(203,172,249,0.2)] group-hover:scale-110 transition-transform duration-300">
            {index === 0 ? (
              <img
                src="/codeai.png"
                alt="DJS CodeAI"
                className="w-full h-full object-contain p-2 rounded-xl"
              />
            ) : index === 1 ? (
              <FaTrophy className="text-3xl sm:text-4xl text-amber-400" />
            ) : index === 2 ? (
              <FaAward className="text-3xl sm:text-4xl text-fuchsia-400" />
            ) : (
              <FaStar className="text-3xl sm:text-4xl text-cyan-400" />
            )}
          </div>

          <div className="font-bold text-lg sm:text-xl text-white max-w-xs leading-snug">
            {achievement.title}
          </div>
          <div className="text-xs sm:text-sm text-purple mt-1 font-medium">
            {achievement.organization}
          </div>
          {index === 0 ? (
            <div className="text-[11px] text-purple/80 mt-2 font-medium">
              Official DJS CodeAI Logo
            </div>
          ) : (
            <div className="text-[11px] text-white-200/50 mt-2 italic font-light">
              [Add official photo / screenshot here]
            </div>
          )}
        </div>

        {/* Bottom Tag Bar */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white-200">
          <span className="font-semibold text-white/90">{achievement.badge}</span>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-purple hover:underline"
            >
              <span>{achievement.linkText || "View details"}</span>
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

              {/* Visual Side (Placeholder or Image) */}
              <div className="w-full lg:w-1/2">
                {renderPlaceholderVisual(item, index)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
