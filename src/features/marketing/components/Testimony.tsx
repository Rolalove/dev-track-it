"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonies = [
  {
    id: 1,
    name: "Kofoworola Shonuyi",
    role: "Frontend Engineer",
    image: "/assets/marketing/IMG_3255.JPG",
    description:
      "Before DevTrackIt, I had no idea how to prep for data-focused interviews. The generated questions and prep materials were on-point. I walked into my final round feeling fully prepared, and I got the job!",
  },
  {
    id: 2,
    name: "Michael B.",
    role: "Backend Developer",
    image: "/assets/marketing/interview.png",
    description:
      "The application tracking feature is a lifesaver. I can see all my applications in one place and never miss a deadline.",
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Data Scientist",
    image: "/assets/marketing/emily.png",
    description:
      "DevTrackIt helped me prepare for my interviews and land my dream role at Microsoft. The interview prep feature was a game-changer!",
  },
];

const Testimony = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  const active = testimonies[activeIndex];

  return (
    <section id="stories" className="space-y-12 py-6">
      {/* Header */}
      <div className="space-y-3 text-center">
        <h3 className="text-3xl font-semibold text-foreground">
          Real Stories, Real Wins
        </h3>
        <p className="max-w-2xl mx-auto text-foreground font-medium text-lg md:text-xl">
          See how others used DevTrackIt to land roles at leading companies.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main Card */}
        <div
          className="relative w-full"
          style={{
            background: "linear-gradient(360deg, #318CE7 0%, #F3F9FF 100%)",
          }}
        >
          {/* Card Content */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 md:p-12 pb-28 md:pb-12 md:pr-48 min-h-80 transition-all duration-500">
            {/* Image */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-2xl shadow-lg bg-neutral-100">
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="(max-w-768px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>

            {/* Quote and Profile Details */}
            <div className="flex flex-col justify-between h-full space-y-6 text-left">
              <p className="text-base md:text-lg text-neutral-800 font-medium leading-relaxed">
                {active.description}
              </p>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-neutral-900">
                  {active.name}
                </h4>
                <p className="text-sm text-neutral-700 font-semibold">
                  {active.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Cutout Container */}
          <div className="absolute bottom-0 right-0 w-44 h-20 bg-[#F3F9FF] rounded-tl-3xl flex items-center justify-center gap-4 px-4">
            {/* Left Inverse Corner mask */}
            <div className="absolute bottom-0 -left-4 w-4 h-4 bg-transparent" />

            {/* Top Inverse Corner mask */}
            <div className="absolute right-0 -top-4 w-4 h-4 bg-transparent" />

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#318CE7] flex items-center justify-center text-[#318CE7] hover:bg-[#318CE7]/10 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous testimony"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#318CE7] flex items-center justify-center text-[#318CE7] hover:bg-[#318CE7]/10 active:scale-95 transition-all cursor-pointer"
              aria-label="Next testimony"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
