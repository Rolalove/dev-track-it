"use client";

import { useState } from "react";
import { FAQItem } from "./FAQItem";

const faqData = [
  {
    id: 1,
    q: "How is DevTrackIt different from job boards",
    a: "DevTrackIt isn't a job board. It's a smart assistant that helps you manage the entire tech job hunt from organizing applications to prepping for interviews and syncing calendars. Think of it like your personal project manager for landing your next role.",
  },
  {
    id: 2,
    q: "Can I use this if I apply to different types of roles?",
    a: "Yes. You can select multiple roles or change your path at any time. Your dashboard, interview prep, and tools will adjust to fit your current focus",
  },
  {
    id: 3,
    q: "What happens when I sync my calendar?",
    a: "We use your calendar to smartly remind you of interview dates, application deadlines, and follow-ups without flooding you with alerts. It's like having a virtual assistant making sure you never miss a step.",
  },
  {
    id: 4,
    q: "I got the job! What now?",
    a: "DevTrackIt helps you celebrate wins and archive your journey. You can mark applications as “Hired,” reflect on what worked, and even export your journey for future reference.",
  },
  {
    id: 5,
    q: "Is my personal data and job info safe?",
    a: "We use your calendar to smartly remind you of interview dates, application deadlines, and follow-ups without flooding you with alerts. It's like having a virtual assistant making sure you never miss a step.",
  },
];

export const FAQList = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl text-foreground text-center font-semibold">
          Let&apos;s Get You Clear
        </h2>
        <p className="text-foreground text-xl text-center font-medium">
          Got a question? We&apos;ve answered the top ones from fellow techies.
        </p>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto gap-4.5">
        {faqData.map(({ id, q, a }) => (
          <FAQItem
            key={id}
            question={q}
            answer={a}
            isOpen={openId === id}
            onToggle={() => handleToggle(id)}
          />
        ))}
      </div>
    </section>
  );
};
