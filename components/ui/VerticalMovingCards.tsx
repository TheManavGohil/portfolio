"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const VerticalMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setStart(true);
    }
  }, []);

  const getImageForIndex = (index: number) => {
    const images = ['/b.jpeg', '/a.jpeg', '/c.jpeg', '/d.jpeg', '/f.jpeg','/e.jpeg','/h.jpeg','/g.jpeg'];
    return images[index % images.length];
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left column - slides down */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className={cn(
            "animate-scroll-down",
            start && "animate-scroll-down"
          )}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className="mb-4 p-4 rounded-2xl border border-slate-800"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <blockquote>
                  <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                    <img
                      src={getImageForIndex(idx)}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="text-xl leading-[1.6] text-white font-bold">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] text-white-200 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Center column - slides up */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className={cn(
            "animate-scroll-up",
            start && "animate-scroll-up"
          )}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className="mb-4 p-4 rounded-2xl border border-slate-800"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <blockquote>
                  <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                    <img
                      src={getImageForIndex(idx)}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="text-xl leading-[1.6] text-white font-bold">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] text-white-200 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - slides down */}
        <div className="w-full md:w-1/2 lg:w-1/3 hidden md:block">
          <div className={cn(
            "animate-scroll-down",
            start && "animate-scroll-down"
          )}>
            {items.map((item, idx) => (
              <div
                key={idx}
                className="mb-4 p-4 rounded-2xl border border-slate-800"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <blockquote>
                  <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                    <img
                      src={getImageForIndex(idx)}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="flex flex-col gap-1">
                      <span className="text-xl leading-[1.6] text-white font-bold">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] text-white-200 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 