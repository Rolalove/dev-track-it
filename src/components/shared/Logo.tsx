import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  textClassName?: string;
}

const sizeClasses = {
  sm: {
    imageSize: 32,
    textSize: "text-base",
    gap: "gap-1.5",
  },
  md: {
    imageSize: 44,
    textSize: "text-xl",
    gap: "gap-2",
  },
  lg: {
    imageSize: 64,
    textSize: "text-3xl",
    gap: "gap-3",
  },
};

export const Logo = ({
  size = "md",
  className = "",
  textClassName = "",
}: LogoProps) => {
  const config = sizeClasses[size];

  return (
    <div className={`flex items-center ${config.gap} ${className}`}>
      <Image
        src="/assets/logo/devtrackit-logo.svg"
        alt="DevTrackIt Logo"
        width={config.imageSize}
        height={config.imageSize}
      />
      <p
        className={`font-semibold text-marketing-foreground ${config.textSize} ${textClassName}`}
      >
        DevTrackIt
      </p>
    </div>
  );
};
