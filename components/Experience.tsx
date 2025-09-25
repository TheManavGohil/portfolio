import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 min-h-[400px]"
          >
            <div className="flex flex-col h-full p-6 md:p-8 lg:p-10 gap-4">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
                <div className="flex-1">
                  <h1 className="text-start text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    {card.title}
                  </h1>
                  <div className="text-start text-purple mt-2 font-semibold text-lg">
                    {card.company}
                  </div>
                  <div className="text-start text-white-100 mt-1 text-sm opacity-70">
                    {card.duration}
                  </div>
                </div>
              </div>
              
              <div className="text-start text-white-100 font-normal flex-1">
                <ul className="list-disc list-inside space-y-3">
                  {card.desc.map((point, index) => (
                    <li key={index} className="text-sm md:text-base leading-relaxed opacity-90">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
