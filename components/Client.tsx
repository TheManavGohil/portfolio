import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>
      <p className="text-[14.2px] text-wrap sm:text-sm opacity-40 mt-4 text-center">
        Note: The following section is just for showcasing purposes. I have not
        worked with these companies.
      </p>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

      </div>
    </section>
  );
};

export default Clients;