"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const testimonies = [
  {
    id: 1,
    name: "Kofoworola Shonuyi",
    role: "Frontend Engineer",
    image: "/assets/marketing/IMG_3255.JPG",
    description:
      "Before DevTrackIt, prepping for technical rounds always felt unguided and overwhelming. The generated questions and structure were completely spot-on. I walked into my final interview rounds feeling fully prepared, and I got the job!",
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
      <SectionHeader
        title="Real Stories, Real Wins"
        subtitle="See how others used DevTrackIt to land roles at leading companies."
      />

      {/* Slider Container */}
      <div className="relative  mx-auto px-4">
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
              <p className="text-base md:text-lg text-marketing-muted font-medium leading-relaxed">
                {active.description}
              </p>

              <div className="space-y-6">
                <p className="text-xl font-medium text-marketing-muted">
                  {active.name}
                </p>
                <p className="text-xl font-medium text-marketing-muted">
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
