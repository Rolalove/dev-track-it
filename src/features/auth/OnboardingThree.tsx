"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Upload, Check } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface OnboardingThreeProps {
  onNext: (data: Record<string, unknown>) => void;
  onBack: () => void;
}

export const OnboardingThree = ({ onNext, onBack }: OnboardingThreeProps) => {
  const [calendarSynced, setCalendarSynced] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCalendarClick = () => {
    setCalendarSynced(!calendarSynced);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({
      calendarSynced,
      resumeName,
    });
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
        title="Get set to track smarter"
        subtitle="Connect tools to unlock tailored prep, reminders, and insights."
        className="!text-left"
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Sync Calendar Button */}
        <Button
          type="button"
          onClick={handleCalendarClick}
          className={`flex items-center justify-between w-full py-5.5 px-2.5 border rounded-xl bg-card text-left transition-all ${
            calendarSynced
              ? "border-green-500 text-green-700 bg-green-50/20"
              : "border-marketing-muted text-marketing-muted hover:border-marketing-primary"
          }`}
        >
          <span className="text-sm font-semibold">
            {calendarSynced
              ? "Google Calendar Connected"
              : "Sync your Calendar"}
          </span>
          {calendarSynced ? (
            <Check className="w-4 h-4 text-green-600 stroke-[2.5]" />
          ) : (
            <Calendar className="w-4 h-4 text-marketing-muted" />
          )}
        </Button>

        {/* Upload Resume Button */}
        <Button
          type="button"
          onClick={handleUploadClick}
          className={`flex items-center justify-between w-full py-5.5 px-2.5 border rounded-xl bg-card text-left transition-all ${
            resumeName
              ? "border-green-500 text-green-700 bg-green-50/20"
              : "border-marketing-muted text-marketing-muted hover:border-marketing-primary"
          }`}
        >
          <span className="text-sm font-semibold truncate max-w-70">
            {resumeName ? resumeName : "Upload Resume"}
          </span>
          {resumeName ? (
            <Check className="w-4 h-4 text-green-600 stroke-[2.5]" />
          ) : (
            <Upload className="w-4 h-4 text-marketing-muted" />
          )}
        </Button>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="hidden "
        />

        {/* Finish Setup Button */}
        <Button
          type="submit"
          className="w-full py-5.5 bg-marketing-primary text-card rounded-xl font-semibold transition-all shadow-md hover:bg-marketing-primary/95 mt-4"
        >
          Finish Setup
        </Button>

        {/* Skip for Now Button */}
        <Button
          type="button"
          onClick={() => onNext({ skipped: true })}
          className="w-full py-5.5 px-2.5 bg-transparent border border-marketing-primary text-marketing-primary hover:bg-marketing-primary/5 rounded-xl font-semibold transition-all text-sm"
        >
          Skip for Now
        </Button>
      </form>
    </div>
  );
};
