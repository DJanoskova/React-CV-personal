import { ReactNode } from "react";
import clsx from "clsx";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "body";
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  let Element: "h1" | "h2" | "h3" | "h4" | "div";

  switch (variant) {
    case "h1":
      Element = "h1";
      break;
    case "h2":
      Element = "h2";
      break;
    case "h3":
      Element = "h3";
      break;
    default:
      Element = "div";
  }

  const classes = clsx(
    {
      'text-4xl font-semibold uppercase relative inline-block mb-4 after:content-[""] after:h-[1px] after:w-full after:-bottom-2 after:bg-gray-900 after:absolute after:left-0':
        variant === "h1",
      "text-lg uppercase inline-block text-gray-500 tracking-[0.14em]":
        variant === "h2",
      "text-body uppercase font-semibold": variant === "h4",
      "text-sm text-gray-600": variant === "body",
    },
    className
  );

  return <Element className={classes}>{children}</Element>;
};
