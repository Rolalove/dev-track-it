import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
  headingLevel?: "h2" | "h3";
}

export const SectionHeader = ({
  title,
  subtitle,
  className = "",
  headingLevel = "h2",
}: SectionHeaderProps) => {
  const HeadingTag = headingLevel;

  return (
    <div className={`space-y-3 text-center ${className}`}>
      <HeadingTag className="text-3xl font-semibold text-marketing-muted">
        {title}
      </HeadingTag>
      <p className="max-w-2xl mx-auto text-marketing-muted font-medium text-lg md:text-xl">
        {subtitle}
      </p>
    </div>
  );
};
