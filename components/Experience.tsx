"use client";
import React from "react";
import { workExperience } from "@/data";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="py-20 w-full relative" id="experience">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md text-xs sm:text-sm text-purple font-medium mb-3">
          <FaBriefcase className="text-xs" />
          <span>Career Progression</span>
        </div>
        <h1 className="heading">
          My <span className="text-purple">Work Experience</span>
        </h1>
        <p className="text-white-200 text-sm sm:text-base mt-4 max-w-2xl mx-auto opacity-75">
          A chronological timeline of engineering production software, scaling cloud infrastructure, and building AI platforms across organizations.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Central Vertical Spine (Desktop: center, Mobile: left) */}
        <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-sky-400 via-purple to-indigo-600 rounded-full opacity-40 shadow-[0_0_15px_rgba(203,172,249,0.5)]" />

        <div className="space-y-12 md:space-y-16">
          {workExperience.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-0`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  {exp.isCurrent ? (
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-purple opacity-75" />
                      <div className="w-5 h-5 rounded-full bg-purple border-4 border-[#04071d] shadow-[0_0_15px_#cbacf9]" />
                    </div>
                  ) : (
                    <div
                      className="w-4 h-4 rounded-full border-4 border-[#04071d] shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: exp.typeColor || "#c084fc" }}
                    />
                  )}
                </div>

                {/* Timeline Card Container (Desktop: half width, Mobile: full width with left margin) */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                    isEven ? "md:text-left" : "md:text-left"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative rounded-3xl border border-white/10 bg-[#04071d]/90 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:border-purple/50 hover:shadow-[0_0_30px_rgba(203,172,249,0.15)]"
                  >
                    {/* Header: Company, Role, Badge */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center flex-shrink-0">
                          <img
                            src={exp.thumbnail}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple transition-colors">
                              {exp.company}
                            </h2>
                            {exp.isCurrent && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm sm:text-base font-medium text-purple mt-0.5">
                            {exp.title}
                          </p>
                        </div>
                      </div>

                      {/* Role Type Pill */}
                      <span
                        className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10 bg-white/5 flex-shrink-0"
                        style={{ color: exp.typeColor }}
                      >
                        {exp.roleType}
                      </span>
                    </div>

                    {/* Metadata: Duration & Location */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-white-200 opacity-80 mb-5 pb-4 border-b border-white/10">
                      <span className="inline-flex items-center gap-1.5">
                        <FaCalendarAlt className="text-purple" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-purple" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.desc.map((point, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-white-100/90 leading-relaxed flex items-start gap-2.5"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: exp.typeColor || "#c084fc" }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white-200 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
