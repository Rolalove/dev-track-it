"use client";
import Snowfall from "react-snowfall";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-center z-10 ">
      {/* Background & Ray wrapper clipped to 100vh */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-0"
        style={{
          background: "linear-gradient(180deg, #318CE7 0%, #FFFFFF 76.44%)",
        }}
      >
        {/* Ray backdrop */}
        <Image
          src="/assets/marketing/ray-destop.png"
          alt="Ray background"
          fill
          priority
          className="object-cover"
        />
        {/* Snowfall background */}
        <Snowfall color="white" style={{ opacity: 0.6 }} />
      </div>

      <Navbar />

      {/* Hero Main content */}
      <div className="relative z-10  max-w-4xl mx-auto flex flex-col items-center gap-5 text-center px-6 mt-8 md:mt-24">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-marketing-foreground leading-tight">
          Track Your Career Smarter.
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-marketing-foreground max-w-2xl leading-relaxed">
          Manage your job applications, prep better for interviews, and stay on
          top of your professional goals all in one place.
        </p>

        {/* Actions */}
        <div className="flex flex-row items-center gap-4 mt-2">
          <Link
            href="/signup"
            className="bg-marketing-primary text-card font-medium text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
          >
            Get Started
          </Link>
          <Link
            href=""
            className="bg-transparent text-marketing-primary border border-marketing-primary font-medium text-sm px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </Link>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 flex justify-center mt-12 -mb-30 sm:-mb-40 md:-mb-55 lg:-mb-70">
        <div className="">
          <Image
            src="/assets/marketing/Dashboard-Light-mode.png"
            alt="Dashboard light mode mockup"
            width={1200}
            height={750}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
