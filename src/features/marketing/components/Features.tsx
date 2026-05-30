"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";

const features = [
  {
    id: 1,
    title: "Stay Synced",
    description:
      "Integrate with your calendar and tools. Get nudges when it's time to follow up or prep.",
    image: "/assets/marketing/calendar.png",
  },
  {
    id: 2,
    title: "Track Smarter",
    description:
      "Never miss a deadline. Organize all your job applications in one interactive timeline.",
    image: "/assets/marketing/application.png",
  },
  {
    id: 3,
    title: "Interview Better",
    description:
      "Get tailored prep questions, resume advice, and mock interviews based on your role.",
    image: "/assets/marketing/interview.png",
  },
];

const Features = () => {
  const feat3 = features.find((f) => f.id === 3)!;
  const [activeState, setActiveState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % 3);
    }, 3000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const getCard1And2Classes = (state: number) => {
    if (state === 0) return "scale-100 translate-x-0 translate-y-0";
    if (state === 1) return "scale-[1.35] translate-x-0 translate-y-6";
    return "scale-x-[-1.35] scale-y-[1.35] translate-x-0 translate-y-6";
  };

  const getCard3Classes = (state: number) => {
    if (state === 0) return "scale-100 translate-x-0 translate-y-0";
    if (state === 1) return "scale-[1.25] translate-x-0 translate-y-8";
    return "scale-x-[-1.25] scale-y-[1.25] translate-x-0 translate-y-8";
  };

  return (
    <section id="features" className="space-y-10">
      <SectionHeader
        title="Why Tech Pros Use DevTrackIt"
        subtitle="No more spreadsheets or scattered bookmarks, DevTrackIt adapts to your goals and helps you land your next role faster."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Column 1: Feature 1 & 2 stacked */}
        <div className="flex flex-col gap-6">
          {features
            .filter((feat) => feat.id !== 3)
            .map((feat) => (
              <div
                key={feat.id}
                className="group flex flex-col justify-between p-6 bg-marketing-card border border-marketing-primary rounded-2xl flex-1 min-h-45 relative overflow-hidden"
              >
                {/* Text top-center */}
                <div className="text-center space-y-2 z-10">
                  <h3 className="text-2xl font-semibold text-marketing-muted">
                    {feat.title}
                  </h3>
                  <p className="text-xl text-marketing-muted font-medium leading-relaxed max-w-md mx-auto">
                    {feat.description}
                  </p>
                </div>
                {/* Image centered bottom */}
                <div className="flex justify-center items-end mt-4">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    width={100}
                    height={100}
                    className={`object-contain transition-all duration-1000 ease-in-out transform ${getCard1And2Classes(activeState)}`}
                  />
                </div>
              </div>
            ))}
        </div>
        {/* Column 2: Feature 3 spanning full height */}
        <div className="group relative overflow-hidden flex flex-col justify-between p-6 bg-marketing-card border border-marketing-primary rounded-2xl min-h-95">
          {/* Text top-center */}
          <div className="text-center space-y-2 z-10">
            <h3 className="text-2xl font-semibold text-marketing-muted">
              {feat3.title}
            </h3>
            <p className="text-xl text-marketing-muted font-medium leading-relaxed max-w-md mx-auto">
              {feat3.description}
            </p>
          </div>
          {/* Image large, centered bottom */}
          <div className="flex justify-center items-end mt-6">
            <Image
              src={feat3.image}
              alt={feat3.title}
              width={380}
              height={380}
              className={`object-contain transition-all duration-1000 ease-in-out transform ${getCard3Classes(activeState)}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
