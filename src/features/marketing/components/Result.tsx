import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Result = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-6 items-start">
        <h2 className="font-semibold text-3xl text-foreground">
          Designed for Tech Job Wins
        </h2>
        <p className="max-w-lg text-xl font-medium text-foreground leading-relaxed">
          This is what success looks like from the first tracked application to
          the final offer letter. DevTrackIt helps you stay organized, focused,
          and ready. When the offer comes in, you&apos;re not just surprised
          you&apos;re prepared.
        </p>
        <Link
          className="bg-marketing-border text-base text-white font-medium rounded-xl px-6 py-3 "
          href=""
        >
          Start Your Journey
        </Link>
      </div>

      <div className="py-10 pl-10 bg-marketing-card border border-marketing-border rounded-xl">
        <div className="bg-white py-5 flex flex-col justify-center items-center rounded-tl-2xl rounded-bl-2xl px-6 gap-3 text-center">
          <Image
            src="/assets/marketing/celebration.svg"
            quality={100}
            alt="celebration"
            width={200}
            height={150}
          />
          <h3 className="font-semibold text-2xl text-foreground">
            You landed the job!
          </h3>
          <p className="max-w-md text-foreground font-medium text-base leading-relaxed">
            All your effort tracking, prepping, and applying paid off. Congrats
            on your new role. We&apos;re proud to have been part of the journey.
          </p>
          <p className="text-base font-medium text-marketing-border cursor-pointer">
            Back to Dashboard
          </p>
        </div>
      </div>
    </section>
  );
};

export default Result;
