import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[50px] md:mb-[5px] pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take your digital presence to{" "}
          <span className="text-purple">the next level?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can improve your
          goals.
        </p>

        <a title="Get in touch" href="mailto:gohilmanav2005@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 justify-center items-center">
        <div className="flex items-center gap-4">
          {socialMedia.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={profile.id}
              className="cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 transition-colors"
            >
              <img src={profile.img} alt={profile.link} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;