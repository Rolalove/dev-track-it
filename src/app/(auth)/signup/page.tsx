"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingOne } from "@/features/auth/OnboardingOne";
import { OnboardingTwo } from "@/features/auth/OnboardingTwo";
import { OnboardingThree } from "@/features/auth/OnboardingThree";
import { Logo } from "@/components/shared/Logo";
import Image from "next/image";

const signUpStat = [
  {
    image: "/assets/marketing/application.png",
    title: "Track Applications, Effortlessly.",
    subtitle: "Stay organized and never lose sight of your job search.",
    quote: "Let's Set You Up",
    num: "01",
  },
  {
    image: "/assets/marketing/interview.png",
    title: "Ace Every Interview.",
    subtitle:
      "Personalized prep, relevant questions, and mock interviews. We help you show up ready, every time.",
    quote: "Personalization",
    num: "02",
  },
  {
    image: "/assets/marketing/calendar.png",
    title: "Own Your Schedule",
    subtitle:
      "Integrated calendar view to stay on top of interviews, follow-ups, and key dates, all in one glance.",
    quote: "Sync & Start",
    num: "03",
  },
];

export default function SignUpPage() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleNext = (data?: Record<string, unknown>) => {
    console.log(`Step ${activeStep + 1} completed:`, data);
    if (activeStep < signUpStat.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      // Setup finished, redirect to the portal dashboard
      router.push("/dashboard");
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <OnboardingOne onNext={handleNext} />;
      case 1:
        return <OnboardingTwo onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <OnboardingThree onNext={handleNext} onBack={handleBack} />;
      default:
        return <OnboardingOne onNext={handleNext} />;
    }
  };

  const activeStat = signUpStat[activeStep];

  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-[55%_45%]">
      {/* Left Column: Premium Branding Panel */}
      <div
        className="hidden lg:flex flex-col justify-between p-8 lg:py-12 lg:pl-24 lg:pr-36 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(360deg, var(--marketing-primary) 0%, #FFFFFF 100%)",
        }}
      >
        {/* Top Header Logo */}
        <div className="relative z-10">
          <Logo size="md" />
        </div>

        {/* Center Graphic and Copy */}
        <div
          key={activeStep}
          className="flex flex-col grow py-6 justify-center"
        >
          <div className="relative w-32 h-32 mb-6">
            <Image
              src={activeStat.image}
              alt={activeStat.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-3 max-w-lg">
            <h2 className="text-2xl lg:text-3xl font-semibold text-marketing-muted tracking-tight leading-tight">
              {activeStat.title}
            </h2>
            <p className="text-sm lg:text-2xl text-marketing-muted font-medium leading-relaxed">
              {activeStat.subtitle}
            </p>
          </div>
        </div>

        {/* Three box step indicators */}
        <div className="grid grid-cols-3 gap-3 mt-auto">
          {signUpStat.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`flex flex-col justify-between p-3.5 rounded-lg border text-left transition-all min-h-22.5 h-full cursor-pointer ${
                index === activeStep
                  ? "bg-white text-neutral-900 border-white shadow-md scale-[1.02]"
                  : "bg-white/40 text-neutral-800 border-white/20 hover:bg-white/50"
              }`}
            >
              <span className={`text-base font-medium leading-tight`}>
                {item.quote}
              </span>
              <span className={`text-2xl font-semibold leading-none mt-4`}>
                {item.num}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Column: Dynamic Onboarding Steps */}
      <div className="flex items-center justify-center p-8 bg-white min-h-screen lg:min-h-0 lg:h-full lg:overflow-y-auto">
        {renderStep()}
      </div>
    </div>
  );
}
