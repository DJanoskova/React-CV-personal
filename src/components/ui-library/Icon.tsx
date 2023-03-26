import clsx from "clsx";

import github from "bootstrap-icons/icons/github.svg";
import linkedin from "bootstrap-icons/icons/linkedin.svg";
import medium from "bootstrap-icons/icons/medium.svg";
import globe from "bootstrap-icons/icons/globe.svg";
import codeSquare from "bootstrap-icons/icons/code-square.svg";

export const ICONS = {
  github,
  linkedin,
  medium,
  globe,
  codeSquare,
};

interface IconProps {
  icon: keyof typeof ICONS;
  className?: string;
  alt?: string;
}

export const Icon = ({ icon, className, alt }: IconProps) => {
  const classes = clsx("text-xl", className);
  return (
    <span className={classes}>
      <img src={ICONS[icon]} className="w-5 h-5" alt={alt} />
    </span>
  );
};
