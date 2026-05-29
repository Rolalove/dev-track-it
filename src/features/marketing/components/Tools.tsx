import React from "react";
import {
  Database,
  FileSpreadsheet,
  Brain,
  TrendingUp,
  Calendar,
  Headset,
  ArrowRight,
} from "lucide-react";

const Tools = () => {
  return (
    <section id="tools" className="space-y-12">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Designed for Every Techie
        </h2>
        <p className="max-w-2xl mx-auto text-foreground/80 font-medium text-lg md:text-xl">
          Whether you&apos;re coding, creating, analyzing, or managing,
          DevTrackIt adapts to your unique journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-8">
          {/* Card 1: Build, ship, and scale with confidence (Lavender) */}
          <div className="group relative flex flex-col justify-between px-2 pt-8 bg-[#9747FF33] border border-[#9747FF] rounded-3xl min-h-[460px] overflow-hidden">
            <div className="space-y-4 text-center ">
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#1E1A4B]">
                Build, ship, and scale with confidence
              </h3>
              <p className="text-sm font-medium mx-auto text-center text-[#1E1A4B]/80 leading-relaxed max-w-md">
                Whether you&apos;re mastering algorithms or deploying code to
                production, DevTrackIt supports your journey from job hunt to
                hire.
              </p>
            </div>
            <div className="relative mt-8 w-full max-w-md mx-auto bottom-0">
              <video
                src="assets/marketing/tool-one-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="border"
              />
            </div>
          </div>

          {/* Card 3: Keep it running, keep it sharp (Peach) */}
          <div className="group relative flex flex-col justify-between p-8 bg-[#F9EADF] border border-[#E5CBB5] rounded-3xl min-h-[300px] transition-all duration-500 hover:shadow-xl hover:translate-y-[-4px] overflow-hidden">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#3F230D]">
                Keep it running, keep it sharp
              </h3>
              <p className="text-sm font-medium text-[#3F230D]/80 leading-relaxed max-w-md">
                Stay ahead with VAs, tech support, and behind-the-scenes ops
                pros navigating tech careers.
              </p>
            </div>

            {/* Integrations Flow */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6">
              {/* Calendar Box */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#F2D7C2] flex items-center justify-center text-neutral-700 transform group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Calendar className="w-6 h-6 text-[#E01E5A]" />
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-[#C4A891] animate-pulse" />

              {/* Slack Box */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#F2D7C2] flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5.04 15.12a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 0 1 2.52-2.52h5.04a2.52 2.52 0 0 1 2.52 2.52v5.04a2.52 2.52 0 0 1-2.52 2.52H8.82a2.52 2.52 0 0 1-2.52-2.52v-5.04z"
                    fill="#36C5F0"
                  />
                  <path
                    d="M8.82 5.04a2.52 2.52 0 1 1 2.52-2.52v2.52H8.82zm0 1.26a2.52 2.52 0 0 1 2.52 2.52v5.04a2.52 2.52 0 0 1-2.52 2.52H3.78A2.52 2.52 0 0 1 1.26 8.82V3.78A2.52 2.52 0 0 1 3.78 1.26h5.04z"
                    fill="#2EB67D"
                  />
                  <path
                    d="M18.96 8.82a2.52 2.52 0 1 1 2.52 2.52h-2.52V8.82zm-1.26 0a2.52 2.52 0 0 1-2.52 2.52H10.14a2.52 2.52 0 0 1-2.52-2.52V3.78A2.52 2.52 0 0 1 10.14 1.26h5.04a2.52 2.52 0 0 1 2.52 2.52v5.04z"
                    fill="#ECB22E"
                  />
                  <path
                    d="M15.12 18.96a2.52 2.52 0 1 1-2.52 2.52v-2.52h2.52zm0-1.26a2.52 2.52 0 0 1-2.52-2.52v-5.04a2.52 2.52 0 0 1 2.52-2.52h5.04a2.52 2.52 0 0 1 2.52 2.52v5.04a2.52 2.52 0 0 1-2.52 2.52h-5.04z"
                    fill="#E01E5A"
                  />
                </svg>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-[#C4A891] animate-pulse" />

              {/* Headset Box */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#F2D7C2] flex items-center justify-center text-neutral-700 transform group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                <Headset className="w-6 h-6 text-[#36C5F0]" />
              </div>

              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-[#C4A891] animate-pulse" />

              {/* Asana Box */}
              <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-[#F2D7C2] flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                {/* Asana 3-dots logo */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="7" r="3" fill="#F06560" />
                  <circle cx="7.5" cy="15" r="3" fill="#F06560" />
                  <circle cx="16.5" cy="15" r="3" fill="#F06560" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-8">
          {/* Card 2: Transform data into decisions (Blue) */}
          <div className="group relative flex flex-col justify-between p-8 bg-[#E2F1FF] border border-[#A9D2FE] rounded-3xl min-h-[300px] transition-all duration-500 hover:shadow-xl hover:translate-y-[-4px] overflow-hidden">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#0E2442]">
                Transform data into decisions
              </h3>
              <p className="text-sm font-medium text-[#0E2442]/80 leading-relaxed max-w-md">
                Track applications, prep for SQL/ML interviews. Perfect for data
                minds at any level.
              </p>
            </div>

            {/* Data Arc Mockup */}
            <div className="relative w-full h-32 mt-4 flex items-end justify-center overflow-hidden">
              {/* Semi-circular dotted arc */}
              <svg
                className="absolute bottom-[-10px] w-64 h-32"
                viewBox="0 0 200 100"
              >
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#9ECBFF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Database Badge (Left) */}
              <div className="absolute left-[15%] bottom-[10%] w-10 h-10 bg-white rounded-full shadow-md border border-[#9ECBFF] flex items-center justify-center text-yellow-500 transform group-hover:-translate-y-1 transition-transform duration-300">
                <Database className="w-5 h-5" />
              </div>

              {/* Excel Badge (Top Left) */}
              <div className="absolute left-[32%] bottom-[50%] w-10 h-10 bg-white rounded-full shadow-md border border-[#9ECBFF] flex items-center justify-center text-emerald-500 transform group-hover:-translate-y-1.5 transition-transform duration-300 delay-75">
                <FileSpreadsheet className="w-5 h-5" />
              </div>

              {/* Brain Badge (Top Right) */}
              <div className="absolute right-[32%] bottom-[50%] w-10 h-10 bg-white rounded-full shadow-md border border-[#9ECBFF] flex items-center justify-center text-indigo-500 transform group-hover:-translate-y-1.5 transition-transform duration-300 delay-100">
                <Brain className="w-5 h-5" />
              </div>

              {/* Chart Badge (Right) */}
              <div className="absolute right-[15%] bottom-[10%] w-10 h-10 bg-white rounded-full shadow-md border border-[#9ECBFF] flex items-center justify-center text-orange-500 transform group-hover:-translate-y-1 transition-transform duration-300 delay-150">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 4: Create experiences that wow (Pink) */}
          <div className="group relative flex flex-col justify-between p-8 bg-[#FCE3E4] border border-[#F7BAC0] rounded-3xl min-h-[460px] transition-all duration-500 hover:shadow-xl hover:translate-y-[-4px] overflow-hidden">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#4C181C]">
                Create experiences that wow
              </h3>
              <p className="text-sm font-medium text-[#4C181C]/80 leading-relaxed max-w-md">
                From wireframes to real-world impact, we help designers and
                product managers prep for product interviews.
              </p>
            </div>

            {/* Design Tools Mockup peeking out */}
            <div className="relative w-full h-44 mt-8 flex justify-center items-end gap-3 sm:gap-4 overflow-hidden">
              {/* Notion Card */}
              <div className="w-20 h-28 bg-white border border-[#F7BAC0] rounded-t-2xl shadow-lg flex flex-col justify-start items-center p-3 transform translate-y-6 group-hover:translate-y-3 transition-transform duration-500">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-black"
                  fill="currentColor"
                >
                  <path d="M4.195 2.5a1.696 1.696 0 0 0-1.685 1.7L2.5 19.82a1.696 1.696 0 0 0 1.696 1.696h15.608a1.696 1.696 0 0 0 1.696-1.696V4.2a1.696 1.696 0 0 0-1.696-1.7H4.195zm1.597 2.766h2.247c.21 0 .39.11.48.29l3.96 7.42h.06V5.556c0-.21.17-.38.38-.38h2.247c.21 0 .38.17.38.38v13.088h-2.247a.417.417 0 0 1-.38-.29l-3.96-7.42h-.06v7.33a.38.38 0 0 1-.38.38H5.792a.38.38 0 0 1-.38-.38V5.646c0-.21.17-.38.38-.38z" />
                </svg>
                <span className="text-[10px] font-bold text-neutral-400 mt-3 uppercase tracking-wider">
                  Docs
                </span>
              </div>

              {/* Figma Card */}
              <div className="w-20 h-36 bg-white border border-[#F7BAC0] rounded-t-2xl shadow-xl flex flex-col justify-start items-center p-3 transform translate-y-4 group-hover:translate-y-1 transition-transform duration-500">
                <svg className="w-8 h-12" viewBox="0 0 24 36" fill="none">
                  <path
                    d="M12 0H6C2.69 0 0 2.69 0 6C0 9.31 2.69 12 6 12H12V0Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M12 0H18C21.31 0 24 2.69 24 6C24 9.31 21.31 12 18 12H12V0Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M12 12H6C2.69 12 0 14.69 0 18C0 21.31 2.69 24 6 24H12V12Z"
                    fill="#A259FF"
                  />
                  <circle cx="18" cy="18" r="6" fill="#1ABCFE" />
                  <path
                    d="M0 30C0 33.31 2.69 36 6 36C9.31 36 12 33.31 12 30V24H6C2.69 24 0 26.69 0 30Z"
                    fill="#0ACF83"
                  />
                </svg>
                <span className="text-[10px] font-bold text-neutral-400 mt-2 uppercase tracking-wider">
                  Design
                </span>
              </div>

              {/* Linear Card */}
              <div className="w-20 h-28 bg-white border border-[#F7BAC0] rounded-t-2xl shadow-lg flex flex-col justify-start items-center p-3 transform translate-y-6 group-hover:translate-y-3 transition-transform duration-500">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-8 h-8 text-black"
                >
                  <path
                    d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                  />
                  <path
                    d="M10 4a6 6 0 00-6 6h12a6 6 0 00-6-6z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-[10px] font-bold text-neutral-400 mt-3 uppercase tracking-wider">
                  Tasks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
