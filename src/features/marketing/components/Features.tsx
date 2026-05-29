import Image from "next/image";

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

  return (
    <section id="features" className="space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-foreground">
          Why Tech Pros Use DevTrackIt
        </h2>
        <p className="max-w-2xl mx-auto text-foreground font-medium text-xl">
          No more spreadsheets or scattered bookmarks, DevTrackIt adapts to your
          goals and helps you land your next role faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Column 1: Feature 1 & 2 stacked */}
        <div className="flex flex-col gap-6">
          {features
            .filter((feat) => feat.id !== 3)
            .map((feat) => (
              <div
                key={feat.id}
                className="flex flex-col justify-between p-6 bg-marketing-card border border-marketing-primary rounded-2xl flex-1 min-h-45"
              >
                {/* Text top-center */}
                <div className="text-center space-y-2">
                  <h3 className="text-base font-bold uppercase tracking-wide text-foreground">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-foreground/80 font-medium leading-relaxed max-w-xs mx-auto">
                    {feat.description}
                  </p>
                </div>
                {/* Image centered bottom */}
                <div className="flex justify-center items-end">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
        </div>
        {/* Column 2: Feature 3 spanning full height */}
        <div className="relative overflow-hidden flex flex-col justify-between p-6 bg-marketing-card border border-marketing-primary rounded-2xl min-h-95">
          {/* Text top-center */}
          <div className="text-center space-y-2 z-10">
            <h3 className="text-base font-bold uppercase tracking-wide text-foreground">
              {feat3.title}
            </h3>
            <p className="text-sm text-foreground/80 font-medium max-w-xs mx-auto leading-relaxed">
              {feat3.description}
            </p>
          </div>
          {/* Image large, centered bottom */}
          <div className="flex justify-center items-end">
            <Image
              src={feat3.image}
              alt={feat3.title}
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
