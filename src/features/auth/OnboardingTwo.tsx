"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { ArrowLeft, X } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface OnboardingTwoProps {
  onNext: (data: Record<string, unknown>) => void;
  onBack: () => void;
}

export const OnboardingTwo = ({ onNext, onBack }: OnboardingTwoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = inputValue.trim();
      if (val && !tags.includes(val)) {
        setTags([...tags, val]);
      }
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const onSubmit = (data: Record<string, unknown>) => {
    const payload = {
      ...data,
      skills: tags,
    };
    console.log("Onboarding Two Data Submitted:", payload);
    onNext(payload);
  };

  return (
    <div className="w-full max-w-md p-4 space-y-4">
      <button
        onClick={onBack}
        type="button"
        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
        Back
      </button>

      <SectionHeader
        title="What's your focus in tech?"
        subtitle="Choose your role, skills, and tools to personalize your experience."
        className="!text-left"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Tech Track / Role Input */}
        <div className="space-y-1.5">
          <Input
            type="text"
            placeholder="Enter your Tech Track"
            {...register("techTrack", { required: "Tech track is required" })}
            className="py-6 border-marketing-muted placeholder:text-marketing-muted text-foreground"
          />
          {errors.techTrack && (
            <p className="text-xs text-red-500">
              {errors.techTrack.message as string}
            </p>
          )}
        </div>

        {/* Tags List */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 py-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1.5 bg-card border border-input rounded-xl text-xs font-semibold text-neutral-800 shadow-2xs hover:border-neutral-300 transition-all"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors focus:outline-none"
                >
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tools & Skills Input */}
        <div className="space-y-1.5">
          <Input
            type="text"
            placeholder="Enter your Tools & Skills"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="py-5.5 border-marketing-muted placeholder:text-marketing-muted text-foreground"
          />
          <p className="text-[10px] text-gray-400 font-semibold px-0.5">
            Press Enter to add skills as tags
          </p>
        </div>

        {/* Goals Dropdown */}
        <div className="space-y-1.5">
          <select
            {...register("currentGoal", { required: "Please select a goal" })}
            defaultValue=""
            className="w-full py-3.5 px-2.5 border border-marketing-muted rounded-xl bg-card text-foreground text-sm font-semibold focus:border-marketing-primary focus:ring-2 focus:ring-marketing-primary/10 outline-none transition-all"
          >
            <option value="" disabled>
              Select your current goal
            </option>
            <option value="Active Job Hunting">Active Job Hunting</option>
            <option value="Open to Opportunities">Open to Opportunities</option>
            <option value="Tracking Internal Growth & Wins">
              Tracking Internal Growth & Wins
            </option>
            <option value="Monitoring My Market Value">
              Monitoring My Market Value
            </option>
          </select>
          {errors.currentGoal && (
            <p className="text-xs text-red-500">
              {errors.currentGoal.message as string}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-5.5 bg-marketing-primary text-card rounded-xl font-semibold transition-all shadow-md hover:bg-marketing-primary mt-2"
        >
          Continue
        </Button>
      </form>
    </div>
  );
};
