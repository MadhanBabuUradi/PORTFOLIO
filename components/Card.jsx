import React from "react";
import Image from "next/image";

const Card = () => {
  const projects = [
    {
      name: "Landing Page",
      image: "/https://github.com/MadhanBabuUradi/portfolio/blob/main/Public/LandingPage.png",
      technologies: ["HTML", "CSS", "Js"],
      link: "https://madhanbabuuradi.github.io/LandingPage/",
    },
    {
      name: "Retro",
      image: "/https://github.com/MadhanBabuUradi/portfolio/blob/main/Public/Retro%20Theam%20Website.jpg",
      technologies: ["React", "SCSS", "GSAP", "Locomotive Scroll"],
      link: "https://retro-website-qr2k.vercel.app/",
    },
    {
      name: "Shopping HUB",
      image: "/https://github.com/MadhanBabuUradi/portfolio/blob/main/Public/Shopping%20HUB.jpg",
      technologies: ["React", "CSS", "HTML","JS", "....more"],
      link: "https://madhanbabuuradi.github.io/Shopping-HUB-Website/"
    },

   
  ];

  return (
    <>
      {projects.map((e) => (
        <div className="w-full md:w-[400px] rounded-3xl md:h-1/2 text-[#c5c5c5] bg-[#0c0f14]">
          <a href={e.link} target="_blank">
            <div className="relative">
              {/* 899 x 510 */}
              <Image
                src={e.image}
                alt={e.name}
                className="w-full rounded-t-3xl md:h-[230px]  object-cover"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="px-4 pb-4  md:pb-6 max-h-fit md:h-fit">
              <div className="py-2 md:pt-2 md:pb-0.5 text-xl font-semibold md:text-xl">
                {e.name}
              </div>
              <div className="flex gap-2 md:gap-2 flex-wrap md:pt-2">
                {e.technologies.map((e) => (
                  <span className="border rounded-xl md:rounded-md border-gray-500 px-5 py-1.5 md:px-2 md:py-0.5 text-xs md:text-sm">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
